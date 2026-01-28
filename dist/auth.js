var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { supabase } from './supabase';
export function signUp(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = yield supabase.auth.signUp({
            email,
            password
        });
        if (error)
            alert(error.message);
        else
            alert('Check your email for verification');
    });
}
export function signIn(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = yield supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error)
            alert(error.message);
        else
            window.location.href = 'dashboard.html';
    });
}
export function signOut() {
    return __awaiter(this, void 0, void 0, function* () {
        yield supabase.auth.signOut();
        window.location.href = 'login.html';
    });
}
