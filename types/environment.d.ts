declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SUPABASE_KEY: string;
			SUPABASE_URL: string;
			PORT: number;
		}
	}
	namespace Express {
		interface ExpressVar {
			req: Request;
			res: Response;
		}
	}
}
