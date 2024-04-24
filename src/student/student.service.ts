import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schema/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
    } catch(err) {
        console.log(err,"===============")
        return err;
    }
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  async update(
    id: string,
    updateStudentDto: CreateStudentDto,
  ): Promise<Student> {
    return this.studentModel
      .findByIdAndUpdate(id, updateStudentDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Student> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
