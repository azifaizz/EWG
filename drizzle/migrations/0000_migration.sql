CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  lead_type text NOT NULL DEFAULT 'enquiry',
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  city text,
  service text,
  preferred_time text,
  message text,
  source_page text,
  status text NOT NULL DEFAULT 'new',
  CONSTRAINT leads_name_len CHECK (char_length(name) BETWEEN 1 AND 100),
  CONSTRAINT leads_phone_len CHECK (char_length(phone) BETWEEN 6 AND 20),
  CONSTRAINT leads_msg_len CHECK (message IS NULL OR char_length(message) <= 1000),
  CONSTRAINT leads_type CHECK (lead_type IN ('enquiry','callback','quote','loan','appointment','advisor','partner','career','grievance'))
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (status = 'new');