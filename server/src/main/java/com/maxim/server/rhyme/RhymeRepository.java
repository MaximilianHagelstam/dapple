package com.maxim.server.rhyme;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RhymeRepository extends JpaRepository<Rhyme, Long> {
    List<Rhyme> findByWord(String word);
}
