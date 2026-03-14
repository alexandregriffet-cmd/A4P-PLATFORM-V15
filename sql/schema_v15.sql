create extension if not exists pgcrypto;

create table if not exists clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists teams (
  id uuid primary key default gen_random_uuid(),
  club_id uuid references clubs(id) on delete cascade,
  name text not null,
  sport text,
  category text,
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  role text not null,
  firstname text,
  lastname text,
  email text,
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  club_id uuid references clubs(id) on delete cascade,
  team_id uuid references teams(id) on delete cascade,
  firstname text not null,
  lastname text not null,
  email text,
  birthdate date,
  position text,
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists club_memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  club_id uuid references clubs(id) on delete cascade,
  role_in_club text not null,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists team_memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  team_id uuid references teams(id) on delete cascade,
  role_in_team text not null,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  owner_type text not null,
  module_scope text not null,
  included_uses integer not null,
  duration_days integer,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists entitlements (
  id uuid primary key default gen_random_uuid(),
  owner_type text not null,
  owner_user_id uuid,
  owner_club_id uuid references clubs(id) on delete cascade,
  owner_team_id uuid references teams(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  module_scope text not null,
  purchased_uses integer not null,
  used_uses integer default 0,
  remaining_uses integer not null,
  valid_from timestamptz default now(),
  valid_until timestamptz,
  status text default 'active',
  created_by uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists access_codes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  label text,
  entitlement_id uuid references entitlements(id) on delete cascade,
  activation_type text not null,
  max_activations integer default 1,
  used_activations integer default 0,
  bound_user_id uuid,
  bound_club_id uuid references clubs(id) on delete set null,
  bound_team_id uuid references teams(id) on delete set null,
  starts_at timestamptz,
  expires_at timestamptz,
  status text default 'active',
  created_by uuid,
  created_at timestamptz default now()
);

create table if not exists access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  club_id uuid references clubs(id) on delete cascade,
  team_id uuid references teams(id) on delete cascade,
  entitlement_id uuid references entitlements(id) on delete cascade,
  source_type text not null,
  source_id uuid,
  status text default 'active',
  created_at timestamptz default now(),
  expires_at timestamptz
);

create table if not exists test_submissions (
  id uuid primary key default gen_random_uuid(),
  module text not null,
  source_context text default 'individual',
  individual_user_id uuid,
  club_id uuid references clubs(id) on delete set null,
  team_id uuid references teams(id) on delete set null,
  player_id uuid references players(id) on delete set null,
  entitlement_id uuid references entitlements(id) on delete set null,
  access_grant_id uuid references access_grants(id) on delete set null,
  firstname text,
  lastname text,
  email text,
  score_global integer,
  dimensions jsonb,
  profile_code text,
  profile_name text,
  summary text,
  raw_answers jsonb,
  created_at timestamptz default now()
);

create table if not exists consumption_logs (
  id uuid primary key default gen_random_uuid(),
  entitlement_id uuid references entitlements(id) on delete cascade,
  test_submission_id uuid references test_submissions(id) on delete cascade,
  consumed_uses integer not null default 1,
  remaining_after integer not null,
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  club_id uuid references clubs(id) on delete set null,
  product_id uuid references products(id) on delete set null,
  stripe_customer_id text,
  stripe_checkout_session_id text,
  stripe_subscription_id text,
  amount integer,
  currency text default 'eur',
  status text,
  created_at timestamptz default now()
);

create table if not exists email_logs (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid references test_submissions(id) on delete set null,
  recipient_email text,
  subject text,
  status text,
  provider_message_id text,
  sent_at timestamptz default now()
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid,
  action text not null,
  target_type text,
  target_id uuid,
  metadata jsonb,
  created_at timestamptz default now()
);
