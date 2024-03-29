import { HeadlineModel } from "@/types/models";
import { Model, Schema, model } from "mongoose";

const headlineSchema = new Schema<HeadlineModel>(
	{
		title: {
			type: String,
			min: 15,
			max: 70,
			trim: true,
			required: true,
		},
		coverImage: {
			type: Schema.Types.ObjectId,
			ref: "asset",
			required: true,
		},
		isPublished: {
			type: Boolean,
			required: true,
			default: true,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "category",
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_, returningDoc) => {
				returningDoc["id"] = returningDoc["_id"];
				delete returningDoc["_id"];
			},
		},
	},
);

export const Headline: Model<HeadlineModel> = model<HeadlineModel>(
	"headline",
	headlineSchema,
);
