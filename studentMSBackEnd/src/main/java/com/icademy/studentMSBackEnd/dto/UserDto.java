package com.icademy.studentMSBackEnd.dto;

import com.icademy.studentMSBackEnd.entity.Authority;
import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {

    private long id;
    private String userName;
    private String password;
    private Date createdAt;
    private Date updatedAt;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String gender;
    private Date bod;
    private String address;
    private String nicNumber;
    private String authority;
    private boolean enabled=true;
    private List<Authority> authorities;


}
