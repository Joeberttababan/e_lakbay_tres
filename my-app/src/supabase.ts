import { createClient } from '@supabase/supabase-js';


const supabaseUrl = import.meta.env.VITE_eLakbayUrl;  // should be valid URL
const supabaseKey = import.meta.env.VITE_eLakbayAnonKey;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// create client
export const supabase = createClient(supabaseUrl, supabaseKey);
