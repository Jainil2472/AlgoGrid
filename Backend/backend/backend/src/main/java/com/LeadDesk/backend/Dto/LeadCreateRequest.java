package com.LeadDesk.backend.Dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LeadCreateRequest(
        @NotBlank(message = "Name is required")
        @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
        String name,

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        String email,

        @NotBlank(message = "Budget range is required")
        String budgetRange,

        @NotBlank(message = "Message is required")
        @Size(min = 10, max = 1000, message = "Message must be between 10 and 1000 characters")
        String message
) {
}
