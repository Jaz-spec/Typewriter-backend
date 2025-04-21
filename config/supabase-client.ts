import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey || !supabaseUrl) {
	throw new Error("SUPABASE: KEY or URL not defined in environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
