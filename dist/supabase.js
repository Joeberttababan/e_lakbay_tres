import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.eLakbayUrl;
const supabaseKey = process.env.eLakbayAnonKey;
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}
// ✅ declare ONCE and export it
export const supabase = createClient(supabaseUrl, supabaseKey);
