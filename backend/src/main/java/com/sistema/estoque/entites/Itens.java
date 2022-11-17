package com.sistema.estoque.entites;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_itens")
public class Itens {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer cod;
    private String nome;
    private Double vlrmed;
    private Double estoque;
    private LocalDate datacad;
    
    public Itens() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getCod() {
        return cod;
    }

    public void setCod(Integer cod) {
        this.cod = cod;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getVlrmed() {
        return vlrmed;
    }

    public void setVlrmed(Double vlrmed) {
        this.vlrmed = vlrmed;
    }

    public Double getEstoque() {
        return estoque;
    }

    public void setEstoque(Double estoque) {
        this.estoque = estoque;
    }

    public LocalDate getDatacad() {
        return datacad;
    }

    public void setDatacad(LocalDate datacad) {
        this.datacad = datacad;
    }

    
    
}
