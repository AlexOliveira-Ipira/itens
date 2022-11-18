package com.sistema.estoque.controler;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.estoque.entites.Itens;
import com.sistema.estoque.services.ItensServices;

@RestController
@RequestMapping(value = "/itens")
public class ItensControler {

    @Autowired
    private ItensServices service;

 /* /   @GetMapping
    public List<Itens> findAll(){
        return service.findAll();
    }*/
    
    //@GetMapping
    //public Page<Itens> findItenPage(Pageable pageable){
    //    return service.findItenPage(pageable);
   // }

    @GetMapping
    public Page<Itens> findItenData(
            @RequestParam(value="minDate", defaultValue = "") String minDate,
            @RequestParam(value="maxDate", defaultValue = "") String maxDate, 
            Pageable pageable){
        return service.findItensData(minDate, maxDate, pageable);
    }
}
