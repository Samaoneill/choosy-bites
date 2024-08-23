import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database";

export const supabaseUrl = "https://skhobycszsggcnfsdiqq.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
