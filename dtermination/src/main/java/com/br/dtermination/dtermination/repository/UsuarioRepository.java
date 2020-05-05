package com.br.dtermination.dtermination.repository;

import com.br.dtermination.dtermination.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import service.Credenciais;


import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    @Query("select u from User u where u.credentials = :credentials")
    public Usuario validaLoginESenha(@Param("credentials") Credenciais credenciais);

    public List<Usuario> findByName(String name);

    public List<Usuario> findByNameAndAge(String name, Integer password);

}
