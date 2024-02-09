package com.yoga.vayishaa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.vayishaa.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String>{

}
