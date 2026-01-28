import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qfjjeiauzsqwrtfxagih.supabase.co';
const supabaseAnonKey = 'sb_publishable_HNCKB3mEXaa5BMsk76CPGw_FvB155tt';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
