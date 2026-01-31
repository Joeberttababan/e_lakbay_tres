// src/signup.ts
import { supabase } from './supabase.js'; // make sure this path is correct

// get the signup form element
const signupForm = document.getElementById('signupForm') as HTMLFormElement;

// make sure the element exists
if (!signupForm) {
  console.error('No form with id "signupForm" found!');
} else {
  // add the submit event listener
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = signupForm.querySelector('button') as HTMLButtonElement;
    btn.disabled = true;  // disable to prevent double submissions

    const fullName = (signupForm.elements[0] as HTMLInputElement).value;
    const email = (signupForm.elements[1] as HTMLInputElement).value;
    const password = (signupForm.elements[2] as HTMLInputElement).value;

    // 1️⃣ create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role: 'tourist' } }
    });

    if (authError) {
      alert('Signup failed: ' + authError.message);
      btn.disabled = false;
      return;
    }

    const userId = authData.user?.id;
    if (!userId) {
      alert('Could not get user ID');
      btn.disabled = false;
      return;
    }

    // 2️⃣ insert into 'profiles' table
    const { error: profileError } = await supabase
      .from('users')
      .insert([{ id: userId, full_name: fullName, email, role: 'tourist' }]);

    if (profileError) {
      alert('Failed to save profile: ' + profileError.message);
      btn.disabled = false;
      return;
    }

    alert('Signup successful!');
    window.location.href = 'municipality-profile.html';
  });
}
