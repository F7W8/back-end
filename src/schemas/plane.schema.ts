import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, SchemaOptions } from 'mongoose';
import internal from 'stream';

const options: SchemaOptions = {
  timestamps: true, // 디비에 만들어진 일자 찍어줌
};
// export const SubmitSchema = new mongoose.Schema({
//     // userName: {type: String, required: true},
//     // title: {type: String, required: true},
//     content: {type: String, required: true},
//     // category: {type: String, required: true},
//     // expireAt: { type: String, require: true },
//     createdAt: { type: Date, default: Date.now },
// })

export type PlaneDocument = HydratedDocument<Plane>;

@Schema()
export class Plane {
  @Prop({ required: true })
  content: string;
  @Prop({ required: true })
  expireAt: Date;
  @Prop({ required: false })
  email: String;
  @Prop({ required: false, default: false})
  checked: Boolean;
}
export const PlaneSchema = SchemaFactory.createForClass(Plane);
