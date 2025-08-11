import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cmebxcqasmqzdlzsqycd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZWJ4Y3Fhc21xemRsenNxeWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NDg4OTUsImV4cCI6MjA3MDUyNDg5NX0.1YW2ICjVNmMKZJJ6lts7rPARubcTq6kayhjDQRKQVu0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
