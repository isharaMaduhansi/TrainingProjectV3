package com.icademy.studentMSBackEnd.repository;


import com.icademy.studentMSBackEnd.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepo extends JpaRepository<User,Long> {

    User findByUserName(String userName);
}
