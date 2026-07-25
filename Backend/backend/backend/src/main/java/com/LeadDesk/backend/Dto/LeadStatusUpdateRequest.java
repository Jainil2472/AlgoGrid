package com.LeadDesk.backend.Dto;

import com.LeadDesk.backend.Entity.LeadStatus;
import jakarta.validation.constraints.NotNull;

public record LeadStatusUpdateRequest(
        @NotNull(message = "Status is required")
        LeadStatus status
) {
}
