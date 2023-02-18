import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './comment.dto';

@Controller('/comment')
export class CommentController {
  constructor(private comment: CommentService) {}

  @Get('/')
  public getAll() {
    return this.comment.getAll();
  }

  @Post('/')
  public create(@Body() body: CommentDto) {
    return this.comment.create(body);
  }
}
