// dist/signup.js
import { supabase } from './supabase.js';

const signupForm = document.getElementById('signupForm');

if (!signupForm) {
  console.error('Signup form not found');
}

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = signupForm.elements[0].value;
  const email = signupForm.elements[1].value;
  const password = signupForm.elements[2].value;

  console.log('Signup:', name, email);

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: name,
        role: 'tourist' // change to 'municipality' if needed
      }
    }
  });

  if (error) {
    alert('Signup failed: ' + error.message);
    console.error(error);
    return;
  }

  alert('Signup successful! Please login.');
  window.location.href = 'login.html';
});
