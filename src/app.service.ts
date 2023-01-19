import { Injectable } from '@nestjs/common';
import { BLOCKS } from './mock/blocks.mock';

@Injectable()
export class AppService {
  blocks = BLOCKS;

  async getBlocks() {
    return await this.blocks;
  }
}
