import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ImageUploadModule } from './image-upload/image-upload.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/student-crud'),
    StudentModule,
    ImageUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
