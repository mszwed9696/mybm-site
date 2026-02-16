import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
<<<<<<< HEAD
  throw new Error(
    "Missing Supabase environment variables. Check .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  );
=======
    throw new Error(
        "Missing Supabase environment variables. Check .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
    );
>>>>>>> feature/SEO-content
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
