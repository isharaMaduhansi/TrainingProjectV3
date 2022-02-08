package com.icademy.studentMSBackEnd.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentDto {

    private long id;
    private String firstName;
    private String lastname;
    private String emailId;
    private String gender;
    private Date bod;
    private String phone;
    private String address;

}
