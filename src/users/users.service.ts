import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
    private users: User[] = [];

    createUser(name: string, password: string) {
        const user: User = { id: Date.now(), name, password };
        this.users.push(user);
        return user;
    }
}
