package com.icademy.studentMSBackEnd.service;

import com.icademy.studentMSBackEnd.dto.AuthenticationRequestDto;
import com.icademy.studentMSBackEnd.dto.LoginResponseDto;
import com.icademy.studentMSBackEnd.dto.UserInfoDto;
import com.icademy.studentMSBackEnd.exception.UserNotFoundException;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

public interface AuthenticationService {

    LoginResponseDto getCredentials(AuthenticationRequestDto authenticationRequestDto) throws InvalidKeySpecException, NoSuchAlgorithmException;
    UserInfoDto getUserInfo (Principal user) throws UserNotFoundException;
}
