package com.assessment.office_inventory_management.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CompleteOrderRequest {

    @NotBlank
    private String txnReference;

    public String getTxnReference() {
        return txnReference;
    }

    public void setTxnReference(String txnReference) {
        this.txnReference = txnReference;
    }
}