package com.maxim.server.rhyme;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RhymeRepository extends JpaRepository<Rhyme, Long> {
    List<Rhyme> findByWord(String word);
}
