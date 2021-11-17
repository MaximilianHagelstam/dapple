package com.maxim.server.rhyme;

import com.vladmihalcea.hibernate.type.array.StringArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table
@TypeDefs({
        @TypeDef(
                name = "string-array",
                typeClass = StringArrayType.class
        )
})
public class Rhyme {
    @Id
    @GeneratedValue()
    private Long id;

    @Column(unique = true)
    private String word;

    @Type(type = "string-array")
    @Column(
            columnDefinition = "text[]"
    )
    private String[] rhymes;

    public Rhyme() {
    }

    public Rhyme(String word, String[] rhymes) {
        this.word = word;
        this.rhymes = rhymes;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String[] getRhymes() {
        return rhymes;
    }

    public void setRhymes(String[] rhymes) {
        this.rhymes = rhymes;
    }

    @Override
    public String toString() {
        return "Rhyme{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", rhymes=" + Arrays.toString(rhymes) +
                '}';
    }
}
