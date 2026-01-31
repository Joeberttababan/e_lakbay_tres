// src/login.ts
import { supabase } from './supabase';

const loginForm = document.getElementById('loginForm') as HTMLFormElement;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = (loginForm.elements[0] as HTMLInputElement).value;
  const password = (loginForm.elements[1] as HTMLInputElement).value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) alert('Login failed: ' + error.message);
  else {
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  }
});