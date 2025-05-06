import { fetchUsers } from "../lib/fetch-data";
import { Request, Response } from "express";

interface Data {
	id: number;
	created_at: string;
	name: string;
	number_of_logins: number | null;
}


export default async function sendData(req: Request, res: Response) {
	let message: Data[] = await fetchUsers();
	if (message) {

		res.json(message);
	} else {
		return [];
	} 
}
