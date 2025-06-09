package com.akshit.ems_backend.service;

import com.akshit.ems_backend.dto.LoginRequest;
import com.akshit.ems_backend.dto.SignupRequest;
import com.akshit.ems_backend.entity.User;
import com.akshit.ems_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // Signup logic
    public User signup(SignupRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // NOTE: Use BCrypt in real apps

        return userRepository.save(user);
    }

    // ✅ Login logic
    public User login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getUsernameOrEmail());

        if (!userOpt.isPresent()) {
            userOpt = userRepository.findByName(request.getUsernameOrEmail());
        }

        if (!userOpt.isPresent()) {
            throw new RuntimeException("User not found with given email or username");
        }

        User user = userOpt.get();

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}
