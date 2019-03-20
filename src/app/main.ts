import { AppService } from './api/app.service';
import { UserService } from './api/user.service';
import AjaxService from './api/ajax.service';

import { IRouterService } from './spi/router.service';

export function startup(routerService: IRouterService) {
    const ajaxService = new AjaxService();
    const userService = new UserService(ajaxService);
    const appService = new AppService(userService, routerService);
    return appService;
}
