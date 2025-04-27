import { createClient } from "@supabase/supabase-js"

const URL ="https://krhbzwwigopqiitkaehh.supabase.co";
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyaGJ6d3dpZ29wcWlpdGthZWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2Mzk0MDAsImV4cCI6MjA2MTIxNTQwMH0.9DaGpHXY8OPdTs48To3EQX4Sw2i6KaurGOmWFMn3diI";
export const supabase = createClient(URL, API_KEY);
