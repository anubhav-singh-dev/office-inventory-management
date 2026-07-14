package com.assessment.office_inventory_management.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RejectOrderRequest {
    public String getRejectReason() {
        return rejectReason;
    }

    public void setRejectReason(String rejectReason) {
        this.rejectReason = rejectReason;
    }

    @NotBlank
    private String rejectReason;
}