package com.assessment.office_inventory_management.controller;

import com.assessment.office_inventory_management.dto.*;
import com.assessment.office_inventory_management.entity.PurchaseOrder;
import com.assessment.office_inventory_management.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:5174")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public PurchaseOrder createOrder(@RequestBody @Valid OrderRequest request) {
        return orderService.createOrder(request);
    }

    @GetMapping
    public ResponseEntity<List<PurchaseOrder>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @PutMapping("/{id}/submit")
    public ResponseEntity<PurchaseOrder> submitOrder(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.submitOrder(id));
    }

    @PutMapping("/{id}/complete")
    public ResponseEntity<PurchaseOrder> completeOrder(
            @PathVariable Long id,
            @RequestBody @Valid CompleteOrderRequest request) {

        return ResponseEntity.ok(orderService.completeOrder(id, request));
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<PurchaseOrder> rejectOrder(
            @PathVariable Long id,
            @RequestBody @Valid RejectOrderRequest request) {

        return ResponseEntity.ok(orderService.rejectOrder(id, request));
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(orderService.login(request));
    }
}