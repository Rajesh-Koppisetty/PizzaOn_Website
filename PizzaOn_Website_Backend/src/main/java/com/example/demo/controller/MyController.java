package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.MyEntity;
import com.example.demo.services.MyServices;

@RestController
@CrossOrigin
@RequestMapping("/PizzaOn")
public class MyController {

    @Autowired
    private MyServices myServices;

    // REGISTER
    @PostMapping("/register")
    public MyEntity createUser(@RequestBody MyEntity user){
        return myServices.createUser(user);
    }

    // LOGIN
    @PostMapping("/login")
    public MyEntity checklogin(@RequestBody MyEntity loginuser) {
        return myServices.checklogin(loginuser);
    }

    // UPDATE
    @PutMapping("/updateUser")
    public MyEntity updateUser(@RequestBody MyEntity updateuser) {
        return myServices.updateUser(updateuser);
    }

    // DELETE
    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id) {
        myServices.deleteUser(id);
    }
}