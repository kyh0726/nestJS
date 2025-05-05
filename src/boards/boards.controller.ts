import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardServece: BoardsService) {}

    @Get()
    getAllBoards() {
        return this.boardServece.getAllBoards();
    }
}
