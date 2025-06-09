package com.akshit.ems_backend.repository;

import com.akshit.ems_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
//    User findByEmailOrName(String email, String name);
Optional<User> findByName(String name);

}