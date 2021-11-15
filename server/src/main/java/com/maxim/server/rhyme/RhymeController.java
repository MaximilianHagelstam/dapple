package com.maxim.server.rhyme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/rhyme")
public class RhymeController {
    private final RhymeService rhymeService;

    @Autowired
    public RhymeController(RhymeService rhymeService) {
        this.rhymeService = rhymeService;
    }

    @GetMapping
    public String[] addTask(@RequestParam String word) {
        return rhymeService.findRhymes(word);
    }
}
