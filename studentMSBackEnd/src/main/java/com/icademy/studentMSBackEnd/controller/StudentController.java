package com.icademy.studentMSBackEnd.controller;


import com.icademy.studentMSBackEnd.dto.StudentDto;
import com.icademy.studentMSBackEnd.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping(value = "/api/v1/")
@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public ResponseEntity<List<StudentDto>> getStudents() {

        return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK);
    }

    @GetMapping("/students/getStudentsOrderByName")
    public ResponseEntity<List<StudentDto>> getStudentsOrderByFName() {

        return new ResponseEntity<>(studentService.getStudentsOrderByFName(), HttpStatus.OK);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable long id) {

        return new ResponseEntity<>(studentService.getStudentById(id), HttpStatus.OK);
    }

    @GetMapping("/students/getStudentsByName/{fName}")
    public ResponseEntity<List<StudentDto>> getStudentsByFName(@PathVariable String fName) {

        return new ResponseEntity<>(studentService.getAllStudentsByFName(fName), HttpStatus.OK);
    }

    @PostMapping("/students/add")
    public ResponseEntity<Boolean> saveStudent(@RequestBody StudentDto studentDTO) {

        studentService.saveStudent(studentDTO);
        return new ResponseEntity<>(Boolean.TRUE,HttpStatus.OK);
    }

    @PostMapping("/students/update/{id}")
    public ResponseEntity<Boolean> updateStudent(@PathVariable long id ,@RequestBody StudentDto studentDTO) {

        studentService.updateStudent(id,studentDTO);
        return new ResponseEntity<>(Boolean.TRUE,HttpStatus.OK);
    }

    @GetMapping("/students/delete/{id}")
    public ResponseEntity<Boolean> deleteStudent(@PathVariable long id) {

        studentService.deleteStudent(id);
        return new ResponseEntity<>(Boolean.TRUE,HttpStatus.OK);
    }
}
