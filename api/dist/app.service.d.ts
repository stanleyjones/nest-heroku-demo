export declare class AppService {
    blocks: {
        id: number;
        time: number;
        txnNum: number;
    }[];
    getBlocks(): Promise<{
        id: number;
        time: number;
        txnNum: number;
    }[]>;
}
