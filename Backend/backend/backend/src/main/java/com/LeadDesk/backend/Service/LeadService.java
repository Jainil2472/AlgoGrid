package com.LeadDesk.backend.Service;

import com.LeadDesk.backend.Dto.LeadCreateRequest;
import com.LeadDesk.backend.Dto.LeadResponse;
import com.LeadDesk.backend.Entity.Lead;
import com.LeadDesk.backend.Entity.LeadStatus;
import com.LeadDesk.backend.Exception.ResourceNotFoundException;
import com.LeadDesk.backend.Repository.LeadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LeadService {

    private final LeadRepository leadRepository;

    @Transactional
    public LeadResponse createLead(LeadCreateRequest request) {
        Lead lead = new Lead();
        lead.setName(request.name().trim());
        lead.setEmail(request.email().trim().toLowerCase());
        lead.setBudgetRange(request.budgetRange().trim());
        lead.setMessage(request.message().trim());
        lead.setStatus(LeadStatus.NEW);

        return toResponse(leadRepository.save(lead));
    }

    @Transactional(readOnly = true)
    public List<LeadResponse> getAllLeads() {
        return leadRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<LeadResponse> searchLeads(String query) {
        if (query == null || query.isBlank()) {
            return getAllLeads();
        }

        String searchTerm = query.trim();
        return leadRepository
                .findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(searchTerm, searchTerm)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public LeadResponse updateStatus(UUID id, LeadStatus status) {
        Lead lead = findLead(id);
        lead.setStatus(status);
        return toResponse(leadRepository.save(lead));
    }

    @Transactional
    public void deleteLead(UUID id) {
        leadRepository.delete(findLead(id));
    }

    private Lead findLead(UUID id) {
        return leadRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lead not found"));
    }

    private LeadResponse toResponse(Lead lead) {
        return new LeadResponse(
                lead.getId(),
                lead.getName(),
                lead.getEmail(),
                lead.getBudgetRange(),
                lead.getMessage(),
                lead.getStatus(),
                lead.getCreatedAt(),
                lead.getUpdatedAt()
        );
    }
}
