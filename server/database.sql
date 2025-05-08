CREATE DATABASE IF NOT EXISTS blood_bank;
USE blood_bank;

CREATE TABLE IF NOT EXISTS admins (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blood_requests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_name VARCHAR(100) NOT NULL,
  blood_type VARCHAR(5) NOT NULL,
  units INT NOT NULL,
  hospital VARCHAR(100) NOT NULL,
  contact_number VARCHAR(20) NOT NULL,
  urgency ENUM('normal', 'urgent', 'emergency') NOT NULL,
  additional_notes TEXT,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blood_inventory (
  blood_type VARCHAR(5) PRIMARY KEY,
  units INT NOT NULL DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default blood types
INSERT INTO blood_inventory (blood_type, units) VALUES
('A+', 0),
('A-', 0),
('B+', 0),
('B-', 0),
('AB+', 0),
('AB-', 0),
('O+', 0),
('O-', 0); 