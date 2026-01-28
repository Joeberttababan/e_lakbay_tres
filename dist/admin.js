import { supabase } from './supabase';
// GET TOP DESTINATIONS
export async function getTopDestinations(limit = 5) {
    const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .order('visits', { ascending: false })
        .limit(limit);
    if (error)
        console.error(error);
    return data || [];
}
// CREATE NEW DESTINATION
export async function addDestination(name, municipality, description, imageUrl) {
    const { error } = await supabase
        .from('destinations')
        .insert([{ name, municipality, description, image_url: imageUrl }]);
    if (error)
        console.error(error);
}
