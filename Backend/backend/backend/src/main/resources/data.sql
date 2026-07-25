INSERT INTO users (id, name, email, password, role, created_at)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'LeadDesk Admin',
    'admin@leaddesk.com',
    '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2',
    'ADMIN',
    CURRENT_TIMESTAMP
)
ON CONFLICT (email) DO NOTHING;
