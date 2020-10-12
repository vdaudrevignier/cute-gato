package fr.latelier.cats.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.latelier.cats.model.Cat;

@Repository
public interface CatRepository extends JpaRepository<Cat, String>{
	
	@Query("Select c from Cat as c order by c.votes DESC")
	List<Cat>findCatsOrdered();
}	
