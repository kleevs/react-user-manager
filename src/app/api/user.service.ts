import AjaxService from './ajax.service';
import * as Urls from './url.constant';

export interface IUser {
    id: number;
    lastName: string;
    firstName: string;
    birthdate: Date;
    login: string;
    isAcif: boolean;
}

interface ISignin {
    login: string;
    password: string;
}

export class UserService {

    constructor(private ajaxService: AjaxService) {}

    getUsers(): Promise<IUser[]> {
        return this.ajaxService.get<IUser[]>(Urls.USERS);
    }

    getUser(id: number): Promise<IUser> {
        return this.ajaxService.get<IUser>(Urls.USER(id));
    }

    getCurrentUser(): Promise<IUser> {
        return this.ajaxService.get<IUser>(Urls.PING);
    }

    saveUser(user: IUser) {
        return user.id ? 
            this.ajaxService.put<IUser, number>(Urls.USER(user.id), user) : 
            this.ajaxService.post<IUser, number>(Urls.USER(user.id), user);
    }

    removeUser(id: number) {
        return this.ajaxService.delete(Urls.USER(id));
    }

    signin(login: string, password: string) : Promise<IUser> {
        return this.ajaxService.post<ISignin, IUser>(Urls.SIGNIN, { login, password });
    }
}
