package com.LeadDesk.backend.Repository;

import com.LeadDesk.backend.Entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LeadRepository extends JpaRepository<Lead, UUID> {

    List<Lead> findAllByOrderByCreatedAtDesc();

    List<Lead> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
            String nameQuery,
            String emailQuery
    );
}
