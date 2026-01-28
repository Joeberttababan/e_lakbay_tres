// src/signup.ts
import { supabase } from './supabase.js';

console.log("ofkeo");
const signupForm = document.getElementById('signupForm') as HTMLFormElement;
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (signupForm.elements[0] as HTMLInputElement).value;
    const email = (signupForm.elements[1] as HTMLInputElement).value;
    const password = (signupForm.elements[2] as HTMLInputElement).value;
    console.log(name, email, password);
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: name,
                role: 'tourist', // or 'municipality' depending on signup
            }
        }
    });

    if (error) {
        alert('Signup failed: ' + error.message);
    } else {
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
    }
});
