import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBlocks(): Promise<{
        id: number;
        time: number;
        txnNum: number;
    }[]>;
}
