package com.maxim.server.rhyme;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("api/rhyme")
public class RhymeController {
    private final RhymeService rhymeService;

    @Autowired
    public RhymeController(RhymeService rhymeService) {
        this.rhymeService = rhymeService;
    }

    @CrossOrigin
    @GetMapping
    public String[] addTask(@RequestParam String word) throws IOException, InterruptedException, JSONException {
        return rhymeService.findRhymes(word);
    }
}
