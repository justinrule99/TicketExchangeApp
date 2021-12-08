// NGROK_URL bypasses iOS SSL rules by generating a real IP - this changes every time NGROK restarts.
// To restart NGROK on port 8000, ./ngrok http 8000 and put the https url here
export const NGROK_URL = 'https://5c22-2604-2800-4-1804-20ba-8c5-5901-d18f.ngrok.io';
export const local = true;
export const URL = local ? 'https://10.8.4.22:8000' : null;
