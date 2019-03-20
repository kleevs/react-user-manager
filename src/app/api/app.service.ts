import { UserService, IUser } from './user.service';
import * as Urls from './url.constant';
import { IRouterService as INativeRouterService } from '../spi/router.service';

export interface IRouterService {
    onRouting();
}

export interface IAppService {
    list: IUser[];
}

export class AppService implements IAppService, IRouterService {
    private _list: IUser[] = [];

    constructor(
        private userService: UserService,
        private nativeRouterService: INativeRouterService
    ) {}

    get list(): IUser[] { return this._list; }
    set list(v: IUser[]) { this._list = v; }

    isConnected() : Promise<boolean> {
        return this.userService.getCurrentUser()
            .then(_ => true)
            .catch(_ => false);
    }

    onRouting() {
        this.isConnected().then(isConnected => {
            if (isConnected) {
                this.userService.getUsers()
                    .then(_ => this.list = _ || []);
            } else {
                this.nativeRouterService.goto(Urls.SIGNIN_HREF);
            }
        })
    }
}