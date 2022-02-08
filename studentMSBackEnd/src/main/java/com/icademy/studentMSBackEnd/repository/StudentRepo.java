package com.icademy.studentMSBackEnd.repository;

import com.icademy.studentMSBackEnd.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface StudentRepo extends JpaRepository<Student,Long> {

    List<Student> findByFirstName(String fName);

    List<Student> findAllByOrderByFirstName();
}
