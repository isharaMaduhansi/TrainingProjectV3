package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.dto.StudentDto;
import com.icademy.studentMSBackEnd.dto.UserDto;
import com.icademy.studentMSBackEnd.entity.Authority;
import com.icademy.studentMSBackEnd.entity.Student;
import com.icademy.studentMSBackEnd.entity.User;
import com.icademy.studentMSBackEnd.exception.IdNotFoundException;
import com.icademy.studentMSBackEnd.exception.UserAlreadySavedException;
import com.icademy.studentMSBackEnd.exception.UserNotFoundException;
import com.icademy.studentMSBackEnd.repository.RoleDetailsRepo;
import com.icademy.studentMSBackEnd.repository.StudentRepo;
import com.icademy.studentMSBackEnd.repository.UserDetailsRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserDetailsRepo userDetailsRepo;

    @Autowired
    private RoleDetailsRepo roleDetailsRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<UserDto> getAllUsers() {

        boolean status= true;
        List<User> userList=userDetailsRepo.findByEnabled(status);
        if(userList.isEmpty()){
            throw new UserNotFoundException("No Active Users");
        }
        return modelMapper.map(userList, new TypeToken<List<UserDto>>(){}.getType());
    }

    @Override
    public List<UserDto> getDeletedUsers() {

        boolean status= false;
        List<User> userList=userDetailsRepo.findByEnabled(status);
        if(userList.isEmpty()){
            throw new UserNotFoundException("You have not removed users yet");
        }
        return modelMapper.map(userList, new TypeToken<List<UserDto>>(){}.getType());
    }

    @Override
    public UserDto getUserById(long id) throws IdNotFoundException {

        User user = userDetailsRepo.findById(id).orElseThrow(() -> new IdNotFoundException("User not exist with id : " + id));
        return modelMapper.map(user , UserDto.class);
    }

    @Override
    public boolean deleteUser(long id) throws IdNotFoundException {
        User existUser = userDetailsRepo.findById(id).orElseThrow(() -> new IdNotFoundException("user not exist with id : " + id));
        existUser.setEnabled(false);
        userDetailsRepo.save(existUser);
        return true;
    }

    @Override
    public boolean saveUser(UserDto userDto) {

        String roleCode= userDto.getAuthority();
        User user = modelMapper.map(userDto, User.class);
        User existUser = userDetailsRepo.findByUserName(user.getUserName());
        if(existUser!=null){
            throw new UserAlreadySavedException("user already exist with user name : " + user.getUserName());
        }
        user.setPassword(passwordEncoder.encode(user.getNicNumber()));
        Authority userRoles = roleDetailsRepo.findByRoleCode(roleCode);
        user.setAuthorities(new ArrayList<Authority>(Arrays.asList(userRoles)));
        userDetailsRepo.save(user);
        return true;
    }

    @Override
    public boolean updateUser(long id, UserDto userDto) throws IdNotFoundException {

        String roleCode= userDto.getAuthority();
        Authority userRoles = roleDetailsRepo.findByRoleCode(roleCode);
        User user = modelMapper.map(userDto, User.class);
        User existUser = userDetailsRepo.findById(id).orElseThrow(() -> new IdNotFoundException("User not exist with id : " + id));
        existUser.setUserName(user.getUserName());
        existUser.setFirstName(user.getFirstName());
        existUser.setLastName(user.getLastName());
        existUser.setNicNumber(user.getNicNumber());
        existUser.setGender(user.getGender());
        existUser.setEmail(user.getEmail());
        existUser.setAuthorities(new ArrayList<Authority>(Arrays.asList(userRoles)));
        existUser.setBod(user.getBod());
        existUser.setPhoneNumber(user.getPhoneNumber());
        existUser.setAddress(user.getAddress());
        userDetailsRepo.save(existUser);
        return true;
    }

    @Override
    public List<UserDto> getUsersOrderByFName() {
        List<User> userList = userDetailsRepo.findAllByOrderByFirstName();
        return modelMapper.map(userList, new TypeToken<List<UserDto>>(){}.getType());
    }
}
