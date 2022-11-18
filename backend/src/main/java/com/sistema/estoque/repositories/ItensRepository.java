package com.sistema.estoque.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sistema.estoque.entites.Itens;


public interface ItensRepository extends JpaRepository<Itens, Long>{

    //Selecionando por data inicial e final
    @Query("select obj from Itens obj where obj.datacad between :min and :max order by obj.datacad")
    Page<Itens> findItensData(@Param("min") LocalDate min,
    @Param("max")  LocalDate max, Pageable pageable);

    //Selecionando por paginação
    // Page<Itens> findItens(Pageable pageable);

}
