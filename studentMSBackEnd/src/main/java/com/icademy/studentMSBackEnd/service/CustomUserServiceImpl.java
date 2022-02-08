package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.entity.User;
import com.icademy.studentMSBackEnd.repository.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserServiceImpl implements UserDetailsService {

    @Autowired
    UserDetailsRepo userDetailsRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userDetailsRepo.findByUserName(username);

        if(null==user) {
            throw new UsernameNotFoundException("User Not Found with userName "+username);
        }
        return user;
    }
}
