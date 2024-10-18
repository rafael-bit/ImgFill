import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
	throw new Error("Please define the MONGODB_URL environment variable.");
}

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URL, {
			dbName: "ImgFill",
			bufferCommands: false,
		}).then((mongoose) => mongoose);
	}

	cached.conn = await cached.promise;
	return cached.conn;
}