import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('image-upload')
export class ImageUploadController {
  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        console.log(file,"file")
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  }))
  uploadImage(@UploadedFile() image) {

 console.log(image, "image");
    if (!image) {
      throw new BadRequestException('No file uploaded');
    }
    // Handle the uploaded file here
    
    return { filename: image.filename };
  }
}
