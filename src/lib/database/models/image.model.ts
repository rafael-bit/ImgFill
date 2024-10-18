import { model, models, Schema, Document } from "mongoose";

export interface IImage extends Document {
	title: string;
	transformationTypes: string;
	publicId: string;
	ImageId: string;
	width: number;
	height: number;
	config?: Record<string, unknown>;
	transformationUrl?: URL;
	aspectRadio?: string;
	color?: string;
	prompt?: string;
	author?: {
		_id: string;
		fistName: string;
		lastName: string;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

const ImageSchema = new Schema({
	title: { type: String, required: true },
	transformationTypes: { type: String, required: true },
	publicId: { type: String, required: true },
	ImageId: { type: String, required: true },
	width: { type: Number, required: true },
	height: { type: Number, required: true },
	config: { type: Object },
	transformationUrl: { type: URL },
	aspectRadio: { type: String },
	color: { type: String },
	prompt: { type: String },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now() },
	updatedAt: { type: Date, default: Date.now() },
});

export const Image = models?.Image || model("Image", ImageSchema);