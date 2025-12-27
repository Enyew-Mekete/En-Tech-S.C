-- Use the database (optional if you're already connected to it)
USE entech_db;

-- Main table to store contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),                    -- Optional field (as in the form)
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Optional: Table for live company stats (used by /api/stats endpoint)
CREATE TABLE IF NOT EXISTS company_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    stat_value INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert default/fallback stats data (matches the mock data in server.js)
INSERT INTO company_stats (label, stat_value) VALUES
('Happy Clients', 1240),
('Project Success', 98),
('Tech Experts', 85),
('Cities Covered', 12)
ON DUPLICATE KEY UPDATE stat_value = VALUES(stat_value);