package com.assessment.office_inventory_management.repository;

import com.assessment.office_inventory_management.entity.PurchaseOrder;
import com.assessment.office_inventory_management.enums.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {

    List<PurchaseOrder> findByStatus(OrderStatus status);

}