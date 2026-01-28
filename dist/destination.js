// src/destination.ts
import { supabase } from './supabase.js';
// Fetch all destinations
export async function getDestinations() {
    const { data, error } = await supabase.from('destinations').select('*');
    if (error) {
        console.error(error);
        return [];
    }
    return data;
}
// Increment visit count
export async function incrementVisit(destination) {
    const { error } = await supabase
        .from('destinations')
        .update({ visits: destination.visits + 1 })
        .eq('id', destination.id);
    if (error)
        console.error(error);
}
