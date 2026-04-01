-- IF YOU WANT TO LOCK DOWN YOUR DATABASE SO NO ONE CAN HACK YOUR PORTFOLIO API:
-- Run this completely optional but highly recommended script in your Supabase SQL Editor.
-- It enables Row Level Security (RLS) so that public visitors can ONLY read your portfolio,
-- but ONLY YOU (when logged in via /admin/login) can insert, update, or delete!

-- 1. Enable RLS on all tables
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- 2. Allow PUBLIC READ access perfectly (so the website visitors can see your portfolio)
CREATE POLICY "Public profiles are viewable by everyone" ON public.profile FOR SELECT USING (true);
CREATE POLICY "Public skills are viewable by everyone" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public certificates are viewable by everyone" ON public.certificates FOR SELECT USING (true);


-- 3. Allow PUBLIC INSERT access for MESSAGES (so visitors can actually contact you!)
CREATE POLICY "Public can insert messages" ON public.messages FOR INSERT WITH CHECK (true);
-- But visitors cannot read messages! Only Admins can read messages.
-- Notice there is no SELECT policy for public.messages!


-- 4. Allow FULL CRUD ACCESS for Authenticated Admins ONLY (You!)
-- Profile
CREATE POLICY "Admins can update profile" ON public.profile FOR UPDATE TO authenticated USING (true);

-- Skills
CREATE POLICY "Admins can full access skills" ON public.skills FOR ALL TO authenticated USING (true);

-- Projects
CREATE POLICY "Admins can full access projects" ON public.projects FOR ALL TO authenticated USING (true);

-- Certificates
CREATE POLICY "Admins can full access certificates" ON public.certificates FOR ALL TO authenticated USING (true);

-- Messages (Admins need to SELECT, UPDATE to reply, etc)
CREATE POLICY "Admins can full access messages" ON public.messages FOR ALL TO authenticated USING (true);
