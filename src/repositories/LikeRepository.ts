import { EntityRepository, Repository } from 'typeorm';
import { Like } from '../entities/Like';

@EntityRepository(Like)
class LikeRepository extends Repository<Like>{ }

export { LikeRepository }