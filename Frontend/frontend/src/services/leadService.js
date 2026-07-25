import api from './api'

export async function createLead(lead) {
  const response = await api.post('/api/leads', lead)
  return response.data.data
}

export async function getLeads(query = '') {
  const url = query.trim() ? '/admin/leads/search' : '/admin/leads'
  const response = await api.get(url, query.trim() ? { params: { query } } : undefined)
  return response.data.data
}

export async function updateLeadStatus(id, status) {
  const response = await api.patch(`/admin/leads/${id}/status`, { status })
  return response.data.data
}
