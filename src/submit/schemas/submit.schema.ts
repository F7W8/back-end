import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

// export const SubmitSchema = new mongoose.Schema({
//     // userName: {type: String, required: true},
//     // title: {type: String, required: true},
//     content: {type: String, required: true},
//     // category: {type: String, required: true},
//     // expireAt: { type: String, require: true },
//     createdAt: { type: Date, default: Date.now },
// })

export type SubmitDocument = HydratedDocument<Submit>;

@Schema()
export class Submit {
  @Prop({required: true})
  content: string;
  @Prop({required: true})
  expireAt: string;
}

export const SubmitSchema = SchemaFactory.createForClass(Submit);