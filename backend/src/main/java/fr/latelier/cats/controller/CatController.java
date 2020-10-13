package fr.latelier.cats.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.latelier.cats.model.Cat;
import fr.latelier.cats.repository.CatRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:3000")
public class CatController {
	@Autowired
	private CatRepository catRepository ;
	//Voter pour le chat
	@PutMapping(path="vote/{catId}")
	public void voteCat(@PathVariable String catId){
		Optional<Cat> votedCat = catRepository.findById(catId);
		System.out.println(catId);
		if(votedCat.isPresent()) {
			votedCat.get().incremVotes();
			catRepository.save(votedCat.get());
		}
	}
	
	//récupérer le top des chats mignons
	@GetMapping("topcats")
	public List<Cat> getTopCats(){
		ArrayList<Cat> list = (ArrayList<Cat>) catRepository.findCatsOrdered();
		return list.subList(0, 5);
	}
	
	//récupérer tous les chats
	@GetMapping("cats")
	public List<Cat> getAllCats(){
		return catRepository.findAll();
	}
}
