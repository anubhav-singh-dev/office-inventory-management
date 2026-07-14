package com.assessment.office_inventory_management.repository;

import com.assessment.office_inventory_management.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}