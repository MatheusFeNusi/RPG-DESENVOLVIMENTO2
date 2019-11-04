// package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

// import java.util.ArrayList;
// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;
// import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;
// import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;



// public class LogoutController {
	
//     List<Credenciais> logado = new ArrayList<>();
//     private final TodosUsuarios todosUsuarios;

//     @Autowired
//     public LogoutController(TodosUsuarios todosUsuarios, Credenciais credenciais) {
//         this.todosUsuarios = todosUsuarios;
//     }

//     private void logout(Credenciais credenciais){
//         if(todosUsuarios.existe(credenciais.getEmail(), credenciais.getSenha()) != null) {
//             logado.remove(credenciais);
//         }
//     }

//     @DeleteMapping("/logout")
//     public ResponseEntity<String> logoutUsuario(@RequestBody Credenciais credenciais){
//         logout(credenciais);
//         return ResponseEntity.ok("Sucesso");
//     }
// }

