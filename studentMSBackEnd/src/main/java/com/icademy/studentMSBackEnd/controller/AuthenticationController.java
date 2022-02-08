package com.icademy.studentMSBackEnd.controller;

import com.icademy.studentMSBackEnd.config.JWTTokenHelper;
import com.icademy.studentMSBackEnd.dto.ApiErrors;
import com.icademy.studentMSBackEnd.dto.AuthenticationRequestDto;
import com.icademy.studentMSBackEnd.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    JWTTokenHelper jwtTokenHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationService authenticationService;


    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequestDto authenticationRequestDto){
        try{
            return ResponseEntity.ok(authenticationService.getCredentials(authenticationRequestDto));
        }catch (Exception ex){
            ApiErrors errors = new ApiErrors(ex.getMessage(),"Bad request", HttpStatus.BAD_REQUEST, LocalDateTime.now());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){

        try{
            return ResponseEntity.ok(authenticationService.getUserInfo(user));
        }catch (Exception ex) {
            ApiErrors errors = new ApiErrors(ex.getMessage(),"Bad request", HttpStatus.BAD_REQUEST, LocalDateTime.now());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }
    }
}
