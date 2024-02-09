package com.yoga.vayishaa.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.vayishaa.model.User;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);
}
