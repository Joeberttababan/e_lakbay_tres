// src/login.ts
import { supabase } from './supabase.js';
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.elements[0].value;
    const password = loginForm.elements[1].value;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error)
        alert('Login failed: ' + error.message);
    else {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    }
});
