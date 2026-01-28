import { createClient } from './supabase.js"https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"';
const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseKey = 'sb_publishable_HNCKB3mEXaa5BMsk76CPGw_FvB155tt';
export const supabase = createClient(supabaseUrl, supabaseKey);
