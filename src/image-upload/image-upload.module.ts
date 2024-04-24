import { Module, MiddlewareConsumer } from '@nestjs/common';
import * as fileUpload from 'express-fileupload';
import { ImageUploadController } from './image-upload.controller';

@Module({
  controllers: [ImageUploadController],
})
export class ImageUploadModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(fileUpload()).forRoutes('image-upload'); // Apply file upload middleware for the image-upload endpoint
  }
}
