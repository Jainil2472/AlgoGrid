package com.LeadDesk.backend.Controller;

import com.LeadDesk.backend.Dto.ApiResponse;
import com.LeadDesk.backend.Dto.LeadResponse;
import com.LeadDesk.backend.Dto.LeadStatusUpdateRequest;
import com.LeadDesk.backend.Service.LeadService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/admin/leads")
@RequiredArgsConstructor
public class AdminLeadController {

    private final LeadService leadService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<LeadResponse>>> getAllLeads() {
        return ResponseEntity.ok(ApiResponse.success("Leads retrieved successfully", leadService.getAllLeads()));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<LeadResponse>>> searchLeads(
            @RequestParam(required = false) String query
    ) {
        return ResponseEntity.ok(ApiResponse.success("Search completed successfully", leadService.searchLeads(query)));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<LeadResponse>> updateStatus(
            @PathVariable UUID id,
            @Valid @RequestBody LeadStatusUpdateRequest request
    ) {
        LeadResponse lead = leadService.updateStatus(id, request.status());
        return ResponseEntity.ok(ApiResponse.success("Lead status updated successfully", lead));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteLead(@PathVariable UUID id) {
        leadService.deleteLead(id);
        return ResponseEntity.ok(ApiResponse.success("Lead deleted successfully", null));
    }
}
