# Office Inventory Management System

A role-based Office Inventory Management application built using Spring Boot and React.

## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security
- MySQL
- Lombok

### Frontend
- React (Vite)
- JavaScript
- Axios
- React Router DOM

---

## Features

### Authentication
- User Login
- Role Based Access (Creator / Purchaser)

### Creator
- Create Purchase Order
- Add Multiple Items
- View Orders
- Submit Order

### Purchaser
- View Submitted Orders
- Complete Order
- Reject Order
- Add Transaction Reference
- Add Rejection Reason

---

## Backend APIs

### Authentication

```
POST /orders/login
```

### Orders

```
POST /orders
GET /orders
PUT /orders/{id}/submit
PUT /orders/{id}/complete
PUT /orders/{id}/reject
```

---

## Database

Tables

- users
- purchase_order
- order_item

---

## Project Structure

### Backend

```
controller
service
repository
entity
dto
security
config
```

### Frontend

```
pages
api
components
styles
```

---

## Running Backend

```
Run Spring Boot Application
```

Backend Port

```
9091
```

---

## Running Frontend

```bash
npm install
npm run dev
```

Frontend Port

```
5173
```

---

## Test Users

Creator

```
Username : creator
Password : 123
```

Purchaser

```
Username : purchaser
Password : 123
```

---

## Functionalities Implemented

- User Login
- Create Purchase Order
- Add Multiple Order Items
- View Orders
- Submit Order
- Complete Order
- Reject Order
- Role Based Workflow
- React Frontend Integration
- REST APIs
- MySQL Persistence
