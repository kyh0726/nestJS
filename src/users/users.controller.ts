import { Body, Controller, Post } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    
    @Post()
    createUser(
        @Body('name') name: string, 
        @Body('password') password: string): User {
        return this.usersService.createUser(name, password);
    }
}
