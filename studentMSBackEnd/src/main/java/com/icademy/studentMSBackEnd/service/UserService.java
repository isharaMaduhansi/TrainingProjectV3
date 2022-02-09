package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.dto.StudentDto;
import com.icademy.studentMSBackEnd.dto.UserDto;
import com.icademy.studentMSBackEnd.entity.User;
import com.icademy.studentMSBackEnd.exception.IdNotFoundException;
import com.icademy.studentMSBackEnd.exception.UserNotFoundException;

import java.util.List;

public interface UserService {

    List<UserDto> getAllUsers();
    List<UserDto> getDeletedUsers() throws UserNotFoundException;
    UserDto getUserById(long id) throws IdNotFoundException;
    boolean deleteUser(long id) throws IdNotFoundException;
    boolean saveUser(UserDto userDto);
    boolean updateUser(long id,UserDto userDto) throws IdNotFoundException;
    List<UserDto> getUsersOrderByFName();
}
