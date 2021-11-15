package com.maxim.server.rhyme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RhymeService {
    private final RhymeRepository rhymeRepository;

    @Autowired
    public RhymeService(RhymeRepository rhymeRepository) {
        this.rhymeRepository = rhymeRepository;
    }

    public List<String> findRhymes(String word) {
        return List.of(word);
    }
}
