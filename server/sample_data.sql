-- Insert sample blood inventory data
INSERT INTO blood_inventory (blood_type, units) VALUES
('A+', 50),
('A-', 30),
('B+', 45),
('B-', 25),
('AB+', 20),
('AB-', 15),
('O+', 60),
('O-', 35);

-- Insert sample blood requests
INSERT INTO blood_requests (patient_name, blood_type, units, hospital, contact_number, urgency, additional_notes, status, created_at) VALUES
('John Smith', 'A+', 2, 'City General Hospital', '+1234567890', 'emergency', 'Patient needs immediate transfusion', 'pending', NOW()),
('Sarah Johnson', 'O-', 3, 'St. Mary\'s Medical Center', '+1987654321', 'urgent', 'Surgery scheduled for tomorrow', 'pending', NOW()),
('Michael Brown', 'B+', 1, 'Community Hospital', '+1122334455', 'normal', 'Regular transfusion needed', 'pending', NOW()),
('Emily Davis', 'AB+', 2, 'University Medical Center', '+1555666777', 'emergency', 'Critical condition', 'pending', NOW()),
('David Wilson', 'A-', 1, 'Memorial Hospital', '+1888999000', 'normal', 'Scheduled procedure', 'pending', NOW());

-- Insert a default admin user (password: admin123)
INSERT INTO admins (username, password) VALUES
('admin', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX5Yx'); 