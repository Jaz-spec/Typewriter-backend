export default function sendData(req: any, res: any): any {
	let message = { text: "it works!" };
	res.json(message);
}
