package com.icademy.studentMSBackEnd.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ApiErrors {

    String message;
    String details;
    HttpStatus httpStatus;
    LocalDateTime timestamp;
}
