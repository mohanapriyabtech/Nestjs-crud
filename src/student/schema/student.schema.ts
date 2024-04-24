import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
@Schema() // Decorate the class with @Schema() from '@nestjs/mongoose'
export class Student extends Document {
  @Prop() // Use @Prop() decorator for each property
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
