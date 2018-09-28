declare module "ual-wrapper" {
    export const version: string;
    export class AzurLaneClient {
        public constructor();
        public baseUrl: string;

        /* Image Generators */
        public card(name: string): Promise<Buffer>;

        /* Text */
        public detailed(value: string | number): Promise<string>;
        public brief(value: string | number): Promise<BriefData[]>;
        public direct(name: string): Promise<string>;
        public embed(name: string): Promise<string>;

        /* Private */
        private _get(endpoint: string, query?: [string, string | number | null][]): Promise<Buffer | { [k: string]: any }>;

    }

    export { AzurLaneClient as Client };
    export type BriefData = {
        item: BriefItemData;
        score: number;
    };

    export type Item = {
        id: string;
        name: string;
        rarity: string;
        type: string;
        affiliation: string;
        stats: BriefStatsData;
        url: string;
        thumbnail: string;
    };

    export type BriefItemData = {
        firepower: string;
        health: string;
        antiAir: string;
        speed: string;
        airPower: string;
        torpedo: string;
    };
}
