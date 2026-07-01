package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.MyEntity;
@Repository("MyRepository")
public interface MyRepository extends JpaRepository<MyEntity, Long> {

	MyEntity findByEmailAndPassword(String email, String password);

	

}