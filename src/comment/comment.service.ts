/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../entity/Comment.entity';
import { Repository } from 'typeorm';
import { CommentDto } from './comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentModal: Repository<Comment>,
  ) {}

  public create(data: CommentDto) {
    return this.commentModal.save(data);
  }

  public getAll() {
    return this.commentModal.find();
  }
}
