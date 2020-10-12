package fr.latelier.cats;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import fr.latelier.cats.model.Cat;
import fr.latelier.cats.repository.CatRepository;

@SpringBootTest
class CatsApplicationTests {
	
	@Autowired
	private CatRepository catRepository;
	
	private static final HttpClient httpClient = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_1_1)
            .connectTimeout(Duration.ofSeconds(10))
            .build();

	@Test
	void contextLoads() {
	}
	
	@Test
	void databaseStuffing() throws IOException, InterruptedException, JSONException {
		HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("https://latelier.co/data/cats.json"))
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        // print response headers
        HttpHeaders headers = response.headers();
        headers.map().forEach((k, v) -> System.out.println(k + ":" + v));

        // print status code
        System.out.println(response.statusCode());

        // print response body
        JSONObject obj = new JSONObject(response.body());
        JSONArray array = obj.getJSONArray("images");
        
        for(int i = 0; i<array.length(); i++) {
        	
        	JSONObject myObj = (JSONObject) array.get(i);
        	String url = (String) myObj.get("url");
        	String id = (String) myObj.get("id");
        	
        	catRepository.save(new Cat(id, url));
        }
	}

}
