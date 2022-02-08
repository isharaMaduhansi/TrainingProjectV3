package com.icademy.studentMSBackEnd;

import com.icademy.studentMSBackEnd.entity.Authority;
import com.icademy.studentMSBackEnd.entity.User;
import com.icademy.studentMSBackEnd.repository.UserDetailsRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class StudentMsBackEndApplication {

//	@Autowired
//	private PasswordEncoder passwordEncoder;
//
//	@Autowired
//	private UserDetailsRepo userDetailsRepo;

	public static void main(String[] args) {

		SpringApplication.run(StudentMsBackEndApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

//	@PostConstruct
//	protected void init() {
//
//		List<Authority> authorityList=new ArrayList<>();
//
//		authorityList.add(createAuthority("USER","User role"));
//		//authorityList.add(createAuthority("ADMIN","Admin role"));
//
//		User user=new User();
//
//		user.setUserName("Hiru");
//		user.setFirstName("Hiruni");
//		user.setLastName("Nisansala");
//
//		user.setPassword(passwordEncoder.encode("Hiru@123"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//
//		userDetailsRepo.save(user);
//
//
//
//	}
//
//	private Authority createAuthority(String roleCode,String roleDescription) {
//		Authority authority=new Authority();
//		authority.setRoleCode(roleCode);
//		authority.setRoleDescription(roleDescription);
//		return authority;
//	}


}
