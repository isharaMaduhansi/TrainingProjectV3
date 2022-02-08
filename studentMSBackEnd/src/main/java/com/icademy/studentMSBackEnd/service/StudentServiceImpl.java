package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.dto.StudentDto;
import com.icademy.studentMSBackEnd.entity.Student;
import com.icademy.studentMSBackEnd.exception.IdNotFoundException;
import com.icademy.studentMSBackEnd.exception.UserNotFoundException;
import com.icademy.studentMSBackEnd.repository.StudentRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public StudentDto saveStudent(StudentDto studentDto) {
        studentRepo.save(modelMapper.map(studentDto, Student.class));
        return studentDto;
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> userList=studentRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<StudentDto>>(){}.getType());
    }

    @Override
    public List<StudentDto> getStudentsOrderByFName() {
        List<Student> userList = studentRepo.findAllByOrderByFirstName();
        return modelMapper.map(userList , new TypeToken<List<StudentDto>>(){}.getType());
    }

    @Override
    public StudentDto getStudentById(long id){
        Student user = studentRepo.findById(id).orElseThrow(() -> new IdNotFoundException("Student not exist with id : " + id));
        return modelMapper.map(user , StudentDto.class);
    }

    @Override
    public List<StudentDto> getAllStudentsByFName(String fName){
        List<Student> userList = studentRepo.findByFirstName(fName);
        if(userList.isEmpty()){
            throw new UserNotFoundException("Student with this first name not found");
        }
        return modelMapper.map(userList , new TypeToken<List<StudentDto>>(){}.getType());
    }

    @Override
    public StudentDto updateStudent(long id, StudentDto studentDto) {

        Student updatedUser = modelMapper.map(studentDto, Student.class);
        Student existUser = studentRepo.findById(id).orElseThrow(() -> new IdNotFoundException("Student not exist with id : " + id));
        existUser.setFirstName(updatedUser.getFirstName());
        existUser.setLastname(updatedUser.getLastname());
        existUser.setEmailId(updatedUser.getEmailId());
        existUser.setGender(updatedUser.getGender());
        existUser.setBod(updatedUser.getBod());
        existUser.setPhone(updatedUser.getPhone());
        existUser.setAddress(updatedUser.getAddress());
        return modelMapper.map(studentRepo.save(existUser) , StudentDto.class);
    }

    @Override
    public boolean deleteStudent(long id){
        Student existUser = studentRepo.findById(id).orElseThrow(() -> new IdNotFoundException("Student not exist with id : " + id));
        studentRepo.delete(existUser);
        return true;
    }
}
