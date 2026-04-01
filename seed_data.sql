-- THIS WILL POPULATE YOUR SUPABASE WITH YOUR ACTUAL PORTFOLIO DATA

-- 1. UPDATE PROFILE (includes show_certificates toggle)
UPDATE public.profile 
SET name = 'ADWAID', 
    title = 'WEB DESIGNER & DEVELOPER', 
    bio = 'SPECIALIZING IN CREATIVE LANDING PAGES FOR BUSINESSES. PASSSIONATE SOFTWARE DEVELOPER CURRENTLY PURSUING MCA.', 
    about = 'I am a passionate developer focused on building intuitive, beautiful, and highly functional web applications. Always exploring modern UI trends and performance optimizations.',
    show_certificates = true
WHERE id IS NOT NULL;

-- If no profile exists yet, insert it:
INSERT INTO public.profile (name, title, bio, about, show_certificates) 
SELECT 'ADWAID', 'WEB DESIGNER & DEVELOPER', 'SPECIALIZING IN CREATIVE LANDING PAGES FOR BUSINESSES. PASSSIONATE SOFTWARE DEVELOPER CURRENTLY PURSUING MCA.', 'I am a passionate developer focused on building intuitive, beautiful, and highly functional web applications.', true
WHERE NOT EXISTS (SELECT 1 FROM public.profile);

-- 2. INSERT SKILLS
INSERT INTO public.skills (name, percentage) VALUES 
('REACT', 90),
('VITE', 85),
('TAILWIND CSS', 95),
('JAVASCRIPT', 85),
('HTML/CSS', 95),
('UI DESIGN', 80),
('SUPABASE', 75);

-- 3. INSERT PROJECTS (Note: the techStack must be a Postgres ARRAY format)
INSERT INTO public.projects (title, description, "techStack", "githubLink", "liveUrl", hidden, "bgColor") VALUES
('MODERN PORTFOLIO', 'A completely redesigned portfolio with a split-screen desktop layout, seamless animations, and brutalist architecture.', ARRAY['REACT', 'TAILWIND', 'VITE'], 'https://github.com/adwaid/portfolio', 'https://adwaid.dev', false, 'bg-brutal-blue'),
('E-COMMERCE APP', 'A full-stack e-commerce solution with dynamic cart management, user authentication, and seamless checkout flow.', ARRAY['REACT', 'NODE', 'MYSQL'], 'https://github.com/adwaid/ecommerce', '', false, 'bg-brutal-green'),
('TASK MANAGER', 'A productivity app for organizing daily tasks, featuring drag-and-drop functionality and progress tracking.', ARRAY['JAVA', 'SPRING', 'MYSQL'], 'https://github.com/adwaid/task-manager', '', false, 'bg-brutal-yellow');

-- 4. INSERT CERTIFICATES
INSERT INTO public.certificates (title, issuer, date, link, "imageUrl", "bgColor") VALUES
('AWS Certified Cloud Practitioner', 'Amazon Web Services', 'March 2026', 'https://aws.amazon.com', '', 'bg-brutal-pink'),
('Advanced React Patterns', 'Frontend Masters', 'January 2026', '', '', 'bg-brutal-blue');

-- 5. INSERT A MOCK MESSAGE TO TEST THE DASHBOARD
INSERT INTO public.messages (name, email, message, read, replied) VALUES
('TechCorp HR', 'hr@techcorp.com', 'We saw your new brutalist portfolio and absolutely loved the design! Are you currently open to frontend developer roles?', false, false);
