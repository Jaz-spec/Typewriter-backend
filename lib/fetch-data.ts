import { supabase } from "../config/supabase-client";
export async function fetchUsers(): Promise<any[]> {
	let { data, error } = await supabase.from("Users").select("*");
	if (error) {
		console.error("Error fetching Users:", error);
		throw error;	
	}

	if (data) {
		console.log("Data:", data);
		return data;
	} else {
		return [];
	}
}
