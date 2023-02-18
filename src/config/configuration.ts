import { Comment } from '../entity/Comment.entity';

export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 4000,
  database: {
    host: process.env.API_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
    type: 'postgres',
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Comment],
    synchronize: true,
  },
});
