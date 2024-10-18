import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
	throw new Error("Please define the MONGODB_URL environment variable.");
}

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

const cachedConnection: MongooseConnection = (globalThis as any).mongoose || { conn: null, promise: null };

(globalThis as any).mongoose = cachedConnection;

export default async function connectToDatabase(): Promise<Mongoose> {
	if (cachedConnection.conn) {
		return cachedConnection.conn;
	}

	if (!cachedConnection.promise) {
		cachedConnection.promise = mongoose.connect(MONGODB_URL, {
			dbName: "ImgFill",
			bufferCommands: false,
		});
	}

	cachedConnection.conn = await cachedConnection.promise;

	return cachedConnection.conn;
}
