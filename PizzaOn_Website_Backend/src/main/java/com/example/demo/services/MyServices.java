package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.MyEntity;
import com.example.demo.repository.MyRepository;



	@Service
	public class MyServices {
		
		@Autowired
		private MyRepository myRepository;
		
		public MyEntity createUser(MyEntity user) {
			return myRepository.save(user);
		}

		public MyEntity checklogin(MyEntity loginuser) {
		    return myRepository.findByEmailAndPassword(
		        loginuser.getEmail(),
		        loginuser.getPassword()
		    );
		}

		public MyEntity updateUser(MyEntity updateuser) {
			return myRepository.save(updateuser);
		}

		public void deleteUser(Long id) {
			myRepository.deleteById(id);
			
		}

}
