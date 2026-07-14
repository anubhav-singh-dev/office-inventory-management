package com.assessment.office_inventory_management.dto;

import com.assessment.office_inventory_management.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    private Long userId;
    private String username;
    private Role role;
    private String message;
}