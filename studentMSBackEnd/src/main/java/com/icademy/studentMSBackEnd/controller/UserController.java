package com.icademy.studentMSBackEnd.controller;

import com.icademy.studentMSBackEnd.dto.UserDto;
import com.icademy.studentMSBackEnd.entity.User;
import com.icademy.studentMSBackEnd.service.StudentService;
import com.icademy.studentMSBackEnd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping(value = "/api/v1/")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<List<UserDto>> getUsers() {

        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/user/deleted-users")
    public ResponseEntity<List<UserDto>> getDeletedUsers() {

        return new ResponseEntity<>(userService.getDeletedUsers(), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable long id) {

        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

    @GetMapping("/user/delete/{id}")
    public ResponseEntity<Boolean> deleteUser(@PathVariable long id) {

        userService.deleteUser(id);
        return new ResponseEntity<>(Boolean.TRUE,HttpStatus.OK);
    }

    @PostMapping("/user/register")
    public ResponseEntity<Boolean> registerUser(@RequestBody UserDto userDto) {

            userService.saveUser(userDto);
            return new ResponseEntity<>(Boolean.TRUE,HttpStatus.OK);
    }

    @PostMapping("/user/update/{id}")
    public ResponseEntity<Boolean> updateUser(@PathVariable long id ,@RequestBody UserDto userDto) {

        userService.updateUser(id,userDto);
        return new ResponseEntity<>(Boolean.TRUE,HttpStatus.OK);
    }

    @GetMapping("/user/getUsersOrderByName")
    public ResponseEntity<List<UserDto>> getUsersOrderByFName() {

        return new ResponseEntity<>(userService.getUsersOrderByFName(), HttpStatus.OK);
    }
}
