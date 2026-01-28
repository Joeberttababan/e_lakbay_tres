// src/storage.ts
import { supabase } from './supabase.js';

export async function uploadImage(file: File, folder = 'destinations') {
  // Upload the file
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(folder)
    .upload(`public/${file.name}`, file, { cacheControl: '3600', upsert: true });

  if (uploadError) {
    console.error('Upload error:', uploadError.message);
    return null;
  }

  // Get the public URL (no error in v2)
  const { data: urlData } = supabase.storage.from(folder).getPublicUrl(uploadData.path);

  return urlData.publicUrl; // This is safe in v2
}
