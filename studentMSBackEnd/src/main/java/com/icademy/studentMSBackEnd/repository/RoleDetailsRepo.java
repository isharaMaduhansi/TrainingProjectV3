package com.icademy.studentMSBackEnd.repository;

import com.icademy.studentMSBackEnd.entity.Authority;
import com.icademy.studentMSBackEnd.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDetailsRepo extends JpaRepository<Authority,Long> {

    Authority findByRoleCode(String roleCode);
}