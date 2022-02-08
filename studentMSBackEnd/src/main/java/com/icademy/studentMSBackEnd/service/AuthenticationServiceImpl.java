package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.config.JWTTokenHelper;
import com.icademy.studentMSBackEnd.dto.AuthenticationRequestDto;
import com.icademy.studentMSBackEnd.dto.LoginResponseDto;
import com.icademy.studentMSBackEnd.dto.UserInfoDto;
import com.icademy.studentMSBackEnd.entity.User;
import com.icademy.studentMSBackEnd.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

@Service
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JWTTokenHelper jwtTokenHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public LoginResponseDto getCredentials(AuthenticationRequestDto authenticationRequestDto) throws InvalidKeySpecException, NoSuchAlgorithmException {

        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequestDto.getUserName(), authenticationRequestDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user=(User)authentication.getPrincipal();
        String jwtToken=jwtTokenHelper.generateToken(user.getUsername());

        LoginResponseDto loginResponseDto=new LoginResponseDto();
        loginResponseDto.setToken(jwtToken);
        return loginResponseDto;
    }

    @Override
    public UserInfoDto getUserInfo(Principal user){

        User userObj=(User) userDetailsService.loadUserByUsername(user.getName());

        if(null==userObj) {
            throw new UserNotFoundException("User Not Found");
        }
        UserInfoDto userInfoDto=new UserInfoDto();
        userInfoDto.setFirstName(userObj.getFirstName());
        userInfoDto.setUserName(userObj.getUserName());
        userInfoDto.setLastName(userObj.getLastName());
        userInfoDto.setRoles(userObj.getAuthorities().toArray());
        return userInfoDto;
    }
}
