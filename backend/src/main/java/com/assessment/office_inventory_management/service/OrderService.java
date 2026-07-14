package com.assessment.office_inventory_management.service;

import com.assessment.office_inventory_management.dto.*;
import com.assessment.office_inventory_management.entity.OrderItem;
import com.assessment.office_inventory_management.entity.PurchaseOrder;
import com.assessment.office_inventory_management.entity.User;
import com.assessment.office_inventory_management.enums.OrderStatus;
import com.assessment.office_inventory_management.repository.PurchaseOrderRepository;
import com.assessment.office_inventory_management.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final PurchaseOrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderService(PurchaseOrderRepository orderRepository,
                        UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    public PurchaseOrder createOrder(OrderRequest request) {

        User user = userRepository.findById(request.getCreatorId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Duplicate item validation against submitted orders
        List<PurchaseOrder> existingOrders = orderRepository.findAll();

        for (PurchaseOrder existingOrder : existingOrders) {

            if (existingOrder.getStatus() != OrderStatus.SUBMITTED) {
                continue;
            }

            for (OrderItem existingItem : existingOrder.getItems()) {

                for (OrderItemRequest newItem : request.getItems()) {

                    if (existingItem.getItemName()
                            .equalsIgnoreCase(newItem.getItemName())) {

                        throw new RuntimeException(
                                "Duplicate item already exists in another submitted order.");
                    }
                }
            }
        }

        PurchaseOrder order = new PurchaseOrder();
        order.setCreatedBy(user);
        order.setExpiryDate(request.getExpiryDate());
        order.setStatus(OrderStatus.DRAFT);
        order.setCreatedAt(LocalDateTime.now());

        List<OrderItem> items = new ArrayList<>();

        for (OrderItemRequest itemRequest : request.getItems()) {

            OrderItem item = new OrderItem();
            item.setItemName(itemRequest.getItemName());
            item.setQuantity(itemRequest.getQuantity());
            item.setOrder(order);

            items.add(item);
        }

        order.setItems(items);

        return orderRepository.save(order);
    }

    public List<PurchaseOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    public PurchaseOrder submitOrder(Long orderId) {

        PurchaseOrder order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        if (order.getStatus() != OrderStatus.DRAFT) {
            throw new RuntimeException("Only draft orders can be submitted.");
        }

        order.setStatus(OrderStatus.SUBMITTED);

        return orderRepository.save(order);
    }

    public PurchaseOrder completeOrder(Long orderId, CompleteOrderRequest request) {

        PurchaseOrder order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        if (order.getStatus() != OrderStatus.SUBMITTED) {
            throw new RuntimeException("Only submitted orders can be completed.");
        }

        order.setStatus(OrderStatus.COMPLETED);
        order.setTxnReference(request.getTxnReference());

        return orderRepository.save(order);
    }

    public PurchaseOrder rejectOrder(Long orderId, RejectOrderRequest request) {

        PurchaseOrder order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        if (order.getStatus() != OrderStatus.SUBMITTED) {
            throw new RuntimeException("Only submitted orders can be rejected.");
        }

        order.setStatus(OrderStatus.REJECTED);
        order.setRejectReason(request.getRejectReason());

        return orderRepository.save(order);
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("Invalid Username"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return new LoginResponse(
                user.getId(),
                user.getUsername(),
                user.getRole(),
                "Login Successful"
        );
    }
}