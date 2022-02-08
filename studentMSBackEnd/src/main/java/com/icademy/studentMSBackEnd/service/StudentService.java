package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.dto.StudentDto;
import com.icademy.studentMSBackEnd.exception.IdNotFoundException;
import com.icademy.studentMSBackEnd.exception.UserNotFoundException;

import java.util.List;

public interface StudentService {

    StudentDto saveStudent(StudentDto studentDto);
    List<StudentDto> getAllStudents();
    List<StudentDto> getStudentsOrderByFName();
    StudentDto getStudentById(long id) throws IdNotFoundException;
    List<StudentDto> getAllStudentsByFName(String  fName) throws UserNotFoundException;
    StudentDto updateStudent(long id,StudentDto studentDto) throws IdNotFoundException;
    boolean deleteStudent(long id) throws IdNotFoundException;
}
