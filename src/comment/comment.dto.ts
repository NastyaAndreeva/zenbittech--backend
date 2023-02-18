import { IsNotEmpty, IsString } from 'class-validator';

export class CommentDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public message: string;
}
