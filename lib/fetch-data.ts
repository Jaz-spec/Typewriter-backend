import { supabase } from "../config/supabase-client";
async function fetchUsers() {
	let { data, error } = await supabase.from("Users").select("*");
	if (error) {
		console.error("Error fetching Users:", error);
		throw error;
	}

	if (data) {
		console.log("Data:", data);
	}
	return data;
}
export { fetchUsers };
