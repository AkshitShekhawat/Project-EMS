package com.akshit.ems_backend.service;

import com.akshit.ems_backend.dto.SignupRequest;
import com.akshit.ems_backend.entity.User;
import com.akshit.ems_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User signup(SignupRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // Use BCrypt in real apps

        return userRepository.save(user);
    }
}
