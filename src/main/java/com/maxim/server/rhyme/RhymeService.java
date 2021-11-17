package com.maxim.server.rhyme;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@Component
public class RhymeService {
    private final RhymeRepository rhymeRepository;

    @Autowired
    public RhymeService(RhymeRepository rhymeRepository) {
        this.rhymeRepository = rhymeRepository;
    }

    public String[] findRhymes(String word) throws IOException, InterruptedException, JSONException {
        List<Rhyme> rhymes = rhymeRepository.findByWord(word);

        if (rhymes.isEmpty()) {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.datamuse.com/words?rel_rhy=" + word))
                    .build();

            HttpResponse<String> response =
                    client.send(request, HttpResponse.BodyHandlers.ofString());

            JSONArray jsonArray = new JSONArray(response.body());

            List<String> rhymesList = new ArrayList<>();

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObj = jsonArray.getJSONObject(i);
                rhymesList.add(jsonObj.getString("word"));
            }

            String[] rhymesArray = new String[rhymesList.size()];
            rhymesList.toArray(rhymesArray);

            if (!rhymesList.isEmpty()) {
                rhymeRepository.save(new Rhyme(word, rhymesArray));
            }

            return rhymesArray;
        }


        return rhymes.get(0).getRhymes();
    }
}
