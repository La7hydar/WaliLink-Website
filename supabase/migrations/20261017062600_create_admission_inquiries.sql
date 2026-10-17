create table public.admission_inquiries (
    id uuid primary key default gen_random_uuid(),
    guardian_name text not null check (char_length(btrim(guardian_name)) between 2 and 100),
    guardian_email text not null check (
        char_length(guardian_email) <= 254
        and guardian_email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ),
    program text not null check (program in ('tahfidz', 'islamic_studies', 'arabic_language', 'other')),
    student_age smallint not null check (student_age between 4 and 25),
    message text not null default '' check (char_length(message) <= 500),
    consented_at timestamptz not null default now(),
    created_at timestamptz not null default now()
);

alter table public.admission_inquiries enable row level security;

revoke all on table public.admission_inquiries from public, anon, authenticated, service_role;
grant insert on table public.admission_inquiries to service_role;
