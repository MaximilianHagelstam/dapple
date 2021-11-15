package com.maxim.server.rhyme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RhymeService {
    private final RhymeRepository rhymeRepository;

    @Autowired
    public RhymeService(RhymeRepository rhymeRepository) {
        this.rhymeRepository = rhymeRepository;
    }

    public String[] findRhymes(String word) {
        if (rhymeRepository.findByWord(word).isEmpty()) {
            return new String[]{"not found"};
        }

        return rhymeRepository.findByWord(word).get(0).getRhymes();
    }
}
