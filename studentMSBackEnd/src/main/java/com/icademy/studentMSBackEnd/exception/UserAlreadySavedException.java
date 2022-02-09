package com.icademy.studentMSBackEnd.exception;

public class UserAlreadySavedException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public UserAlreadySavedException() {
        super();
    }

    public UserAlreadySavedException(String message) {
        super(message);
    }
}

