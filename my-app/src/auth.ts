import { supabase } from './supabase';

// MUNICIPALITY SIGNUP
export async function signUpMunicipality(email: string, password: string, municipality: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: 'municipality',
        municipality: municipality
      }
    }
  });

  if (error) alert(error.message);
  else alert('Municipality account created! Check your email.');
}

// TOURIST SIGNUP
export async function signUpTourist(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: 'tourist',
        municipality: ''
      }
    }
  });

  if (error) alert(error.message);
  else alert('Tourist account created! Check your email.');
}

// LOGIN
export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) alert(error.message);
  else window.location.href = 'dashboard.html';
}

// LOGOUT
export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = 'login.html';
}
