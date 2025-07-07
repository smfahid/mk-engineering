-- Seed data for MK Engineering website

-- Insert sample projects
INSERT INTO projects (title, description, category, status, location, start_date, completion_date, expected_completion, progress, team_size, area, client, features, image_url, gallery_urls) VALUES
-- Ongoing Construction Projects
('Downtown Office Complex', 'Modern 15-story office complex with sustainable design features and smart building technology.', 'construction', 'ongoing', 'Downtown Business District', '2024-01-15', NULL, '2024-12-30', 65, 25, '50,000 sq ft', 'Skyline Developments', ARRAY['LEED Gold Certified', 'Smart Building Technology', 'Underground Parking'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Residential Villa Project', 'Luxury villa with contemporary architecture and premium finishes.', 'construction', 'ongoing', 'Hillside Gardens', '2024-03-01', NULL, '2024-10-15', 40, 12, '8,000 sq ft', 'Private Client', ARRAY['Swimming Pool', 'Home Theater', 'Smart Home System'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Shopping Mall Renovation', 'Complete renovation of existing shopping mall with modern retail spaces.', 'construction', 'ongoing', 'Central Plaza', '2024-02-10', NULL, '2024-08-20', 80, 18, '80,000 sq ft', 'Metro Retail Group', ARRAY['Multi-level Parking', 'Food Court', 'Entertainment Zone'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

-- Ongoing Interior Projects
('Corporate Headquarters Interior', 'Modern office interior design with collaborative spaces and wellness areas.', 'interior', 'ongoing', 'Tech Park', '2024-04-01', NULL, '2024-07-30', 55, 8, '15,000 sq ft', 'TechCorp Industries', ARRAY['Open Office Design', 'Wellness Areas', 'Smart Lighting'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Luxury Hotel Suites', 'High-end hotel suite interiors with premium materials and custom furniture.', 'interior', 'ongoing', 'Waterfront District', '2024-03-15', NULL, '2024-09-10', 30, 10, '25,000 sq ft', 'Heritage Hotels', ARRAY['Custom Furniture', 'Premium Materials', 'Ocean Views'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Restaurant Chain Interiors', 'Interior design for 5 restaurant locations with consistent branding.', 'interior', 'ongoing', 'Multiple Locations', '2024-01-20', NULL, '2024-11-30', 70, 15, '12,000 sq ft', 'Gourmet Dining Co.', ARRAY['Consistent Branding', 'Open Kitchen Design', 'Ambient Lighting'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

-- Completed Construction Projects
('Skyline Business Center', 'A 20-story commercial building with state-of-the-art facilities and LEED Gold certification.', 'construction', 'completed', 'Financial District', '2022-05-15', '2023-11-15', NULL, 100, 30, '50,000 sq ft', 'Skyline Developments', ARRAY['LEED Gold Certified', 'Smart Building Technology', 'Underground Parking'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Green Valley Residences', 'Luxury residential complex with 50 units featuring modern amenities and landscaped gardens.', 'construction', 'completed', 'Suburban Hills', '2021-09-30', '2023-09-30', NULL, 100, 25, '75,000 sq ft', 'Green Valley Properties', ARRAY['Swimming Pool', 'Fitness Center', 'Children''s Play Area'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Metro Shopping Complex', 'Modern shopping complex with retail spaces, food court, and entertainment zone.', 'construction', 'completed', 'City Center', '2022-09-20', '2023-12-20', NULL, 100, 22, '80,000 sq ft', 'Metro Retail Group', ARRAY['Multi-level Parking', 'Food Court', 'Entertainment Zone'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

-- Completed Interior Projects
('Executive Office Suite', 'Sophisticated executive office interior with premium materials and custom furniture.', 'interior', 'completed', 'Corporate Tower', '2023-06-10', '2023-10-10', NULL, 100, 6, '5,000 sq ft', 'TechCorp Industries', ARRAY['Custom Furniture', 'Premium Materials', 'Smart Lighting'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Boutique Hotel Interiors', 'Elegant boutique hotel interior design blending modern comfort with historic charm.', 'interior', 'completed', 'Historic District', '2022-12-25', '2023-08-25', NULL, 100, 8, '25,000 sq ft', 'Heritage Hotels', ARRAY['Historic Preservation', 'Luxury Amenities', 'Custom Artwork'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']),

('Fine Dining Restaurant', 'Upscale restaurant interior with sophisticated ambiance and premium finishes.', 'interior', 'completed', 'Gourmet District', '2023-04-15', '2023-07-15', NULL, 100, 5, '3,000 sq ft', 'Gourmet Dining Co.', ARRAY['Open Kitchen Design', 'Wine Display', 'Ambient Lighting'], '/placeholder.svg?height=300&width=400', ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']);

-- Insert job openings
INSERT INTO job_openings (title, department, location, type, experience, salary_range, description, requirements, responsibilities, is_active) VALUES
('Senior Construction Manager', 'Construction', 'On-site', 'full-time', '5+ years', '$80,000 - $120,000', 'Lead construction projects from planning to completion, manage teams, and ensure quality standards.', 
ARRAY['Bachelor''s degree in Construction Management or related field', '5+ years of construction management experience', 'Strong leadership and communication skills', 'Knowledge of building codes and safety regulations', 'PMP certification preferred'],
ARRAY['Oversee construction projects from start to finish', 'Manage project timelines and budgets', 'Coordinate with architects, engineers, and subcontractors', 'Ensure compliance with safety regulations', 'Conduct regular site inspections'], true),

('Interior Designer', 'Interior Design', 'Office/Client Sites', 'full-time', '3+ years', '$55,000 - $75,000', 'Create innovative interior design solutions for residential and commercial projects.',
ARRAY['Bachelor''s degree in Interior Design', '3+ years of interior design experience', 'Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite', 'Strong creative and visualization skills', 'NCIDQ certification preferred'],
ARRAY['Develop design concepts and presentations', 'Create detailed drawings and specifications', 'Select materials, furniture, and fixtures', 'Collaborate with clients and project teams', 'Manage design projects from concept to completion'], true),

('Project Architect', 'Architecture', 'Office', 'full-time', '4+ years', '$70,000 - $95,000', 'Design and develop architectural plans for construction and renovation projects.',
ARRAY['Bachelor''s or Master''s degree in Architecture', '4+ years of architectural experience', 'Licensed architect preferred', 'Proficiency in Revit, AutoCAD, and 3D modeling software', 'Strong design and technical skills'],
ARRAY['Develop architectural designs and drawings', 'Coordinate with engineering teams', 'Ensure compliance with building codes', 'Participate in client meetings and presentations', 'Review and approve construction documents'], true),

('Site Supervisor', 'Construction', 'On-site', 'full-time', '2+ years', '$45,000 - $60,000', 'Supervise daily construction activities and ensure project quality and safety standards.',
ARRAY['High school diploma or equivalent', '2+ years of construction experience', 'Knowledge of construction processes and safety protocols', 'Strong communication and leadership skills', 'OSHA certification preferred'],
ARRAY['Supervise construction workers and subcontractors', 'Monitor project progress and quality', 'Enforce safety regulations on site', 'Coordinate material deliveries and equipment', 'Report progress to project managers'], true),

('Business Development Manager', 'Sales & Marketing', 'Office/Client Sites', 'full-time', '5+ years', '$65,000 - $85,000 + Commission', 'Drive business growth by identifying new opportunities and building client relationships.',
ARRAY['Bachelor''s degree in Business or related field', '5+ years of business development experience', 'Experience in construction or design industry preferred', 'Strong sales and negotiation skills', 'Excellent communication and presentation abilities'],
ARRAY['Identify and pursue new business opportunities', 'Build and maintain client relationships', 'Prepare proposals and presentations', 'Negotiate contracts and agreements', 'Collaborate with project teams on client requirements'], true);

-- Insert testimonials
INSERT INTO testimonials (name, role, content, rating, is_featured) VALUES
('Sarah Johnson', 'Homeowner', 'MK Engineering transformed our house into a dream home. Their attention to detail and professionalism exceeded our expectations.', 5, true),
('Michael Chen', 'Business Owner', 'The commercial space they designed for our office is both functional and beautiful. Highly recommend their services.', 5, true),
('Emily Davis', 'Property Developer', 'Working with MK Engineering has been a pleasure. They deliver quality work on time and within budget.', 5, true),
('Robert Wilson', 'Restaurant Owner', 'The interior design for our restaurant created the perfect ambiance. Our customers love the space!', 5, false),
('Lisa Thompson', 'Hotel Manager', 'MK Engineering''s interior design work elevated our hotel to a new level of luxury and comfort.', 5, false);
