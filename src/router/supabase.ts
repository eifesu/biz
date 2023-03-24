import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
	"https://bylnvzyuphaciyxhwghb.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5bG52enl1cGhhY2l5eGh3Z2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzMzI5NjYsImV4cCI6MTk5MTkwODk2Nn0.aRIWEJHrwKnd9wYnnnrwFU-bzCq0U8NYgiguXQLvSCc"
);

export default supabase;
