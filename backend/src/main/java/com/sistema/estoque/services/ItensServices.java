package com.sistema.estoque.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.sistema.estoque.entites.Itens;
import com.sistema.estoque.repositories.ItensRepository;

@Service
public class ItensServices {

    @Autowired
    public ItensRepository repository;

  //  public List<Itens> findAll(){
  //     return repository.findAll();
  //  }

  //  public Page<Itens> findItenPage(
  //      Pageable pageable){
  //          return repository.findItens(pageable);
   // }

    @GetMapping
    public Page<Itens> findItensData(
            String minDate, String maxDate, Pageable pageable){

                LocalDate dataAtual = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
                
                LocalDate min = minDate.equals("") ? dataAtual.minusDays(365) : LocalDate.parse(minDate);
                LocalDate max = maxDate.equals("") ? dataAtual : LocalDate.parse(maxDate);
        return repository.findItensData(min, max, pageable);
    }
}
