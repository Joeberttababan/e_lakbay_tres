// src/municipality-profile.ts
import { supabase } from './supabase';

async function loadProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  // Fetch profile from 'profiles' table
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) return console.error(error);

  const profileDiv = document.getElementById('profileInfo');
  if (profileDiv) {
    profileDiv.innerHTML = `
      <p>Full Name: ${profile.full_name}</p>
      <p>Email: ${profile.email}</p>
      <p>Role: ${profile.role}</p>
      <p>Account Created: ${new Date(profile.created_at).toLocaleString()}</p>
    `;
  }
}

loadProfile();