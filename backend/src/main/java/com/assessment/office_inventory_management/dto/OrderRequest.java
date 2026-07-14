package com.assessment.office_inventory_management.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class OrderRequest {

    private LocalDate expiryDate;

    private Long creatorId;

    private List<OrderItemRequest> items;

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    public List<OrderItemRequest> getItems() {
        return items;
    }

    public void setItems(List<OrderItemRequest> items) {
        this.items = items;
    }
}