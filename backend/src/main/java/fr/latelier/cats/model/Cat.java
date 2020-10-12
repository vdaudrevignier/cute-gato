package fr.latelier.cats.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cats")
public class Cat {
	@Id
	private String id;
	
	@Column(name="url")
	private String url;
	
	@Column(name="votes")
	private long votes;
	
	public Cat() {
	}
	
	public Cat(String id, String picUrl) {
		this.id = id;
		this.url = picUrl;
		this.votes = 0;
	}

	public String getId() {
		return id;
	}

	public String getPicUrl() {
		return url;
	}

	public long getVotes() {
		return votes;
	}
	
	public void incremVotes() {
		this.votes++;
	}
}
