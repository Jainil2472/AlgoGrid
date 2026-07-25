package com.LeadDesk.backend.Dto;

import com.LeadDesk.backend.Entity.LeadStatus;

import java.time.LocalDateTime;
import java.util.UUID;

public record LeadResponse(
        UUID id,
        String name,
        String email,
        String budgetRange,
        String message,
        LeadStatus status,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
