// NGROK_URL bypasses iOS SSL rules by generating a real IP - this changes every time NGROK restarts.
// To restart NGROK on port 8000, ./ngrok http 8000 and put the https url here
export const NGROK_URL = 'https://0ac3-2604-2800-4-1804-41d1-1d57-61ca-1724.ngrok.io';
export const local = true;
export const URL = local ? 'https://10.8.4.22:8000' : null;
