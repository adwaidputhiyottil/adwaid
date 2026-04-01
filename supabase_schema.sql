-- Run this perfectly inside your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.profile (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text,
  title text,
  bio text,
  about text,
  show_certificates boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS public.skills (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text,
  percentage int,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text,
  description text,
  "techStack" text[],
  "githubLink" text,
  "liveUrl" text,
  hidden boolean DEFAULT false,
  "bgColor" text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.certificates (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text,
  issuer text,
  date text,
  link text,
  "imageUrl" text,
  "bgColor" text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text,
  email text,
  message text,
  read boolean DEFAULT false,
  replied boolean DEFAULT false,
  "replyText" text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Note: Use the seed_data.sql file to insert all entries instead!
