package com.spring.agendalive.service;

import com.spring.agendalive.document.LiveDocument;
import com.spring.agendalive.repository.LiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class LiveService {

    @Autowired
    LiveRepository liveRepository;

    public Page<LiveDocument> findAll(Pageable pageable, String flag){
        if(flag != null && flag.equals("next")){
            //-6 horas, considerando que uma live demore em média 3 horas, então ainda estaria acontecendo 
            //e, +3 horas de diferença do servidor.
            return liveRepository.findByLiveDateAfterOrderByLiveDateAsc(LocalDateTime.now().plusHours(-6), pageable);
        }else if(flag != null && flag.equals("previous")){

            return liveRepository.findByLiveDateBeforeOrderByLiveDateDesc(LocalDateTime.now().plusHours(-6), pageable);
        }else{
            return liveRepository.findAll(pageable);
        }
    }

    public Optional<LiveDocument> findById(String id){
        return liveRepository.findById(id);
    }

    public LiveDocument save(LiveDocument liveDocument){
        return liveRepository.save(liveDocument);
    }

    public void delete(LiveDocument liveDocument){
        liveRepository.delete(liveDocument);
    }
}
