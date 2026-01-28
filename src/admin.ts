import { supabase } from './supabase';

// GET TOP DESTINATIONS
export async function getTopDestinations(limit: number = 5) {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('visits', { ascending: false })
    .limit(limit);

  if (error) console.error(error);
  return data || [];
}

// CREATE NEW DESTINATION
export async function addDestination(name: string, municipality: string, description: string, imageUrl: string) {
  const { error } = await supabase
    .from('destinations')
    .insert([{ name, municipality, description, image_url: imageUrl }]);

  if (error) console.error(error);
}
