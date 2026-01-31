// src/destination.ts
import  { supabase }  from './supabase.js';

export interface Destination {
  id: number;
  name: string;
  municipality: string;
  description: string;
  visits: number;
  image_url?: string;
}

// Fetch all destinations
export async function getDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase.from('destinations').select('*');
  if (error) {
    console.error(error);
    return [];
  }
  return data as Destination[];
}

// Increment visit count
export async function incrementVisit(destination: Destination) {
  const { error } = await supabase
    .from('destinations')
    .update({ visits: destination.visits + 1 })
    .eq('id', destination.id);
  if (error) console.error(error);
}