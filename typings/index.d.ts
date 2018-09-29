declare module "ual-wrapper" {

//#region classes

    export const version: string;
    export class AzurLaneClient {
        public baseUrl: string;

        /* Image Generators */
        public card(name: string): Promise<Buffer>;

        /* Text */
        public detailed(value: string | number): Promise<DetailedData[]>;
        public brief(value: string | number): Promise<BriefData[]>;
        public direct(name: string): Promise<DetailedData>;
        public embed(name: string): Promise<EmbedData>;

        /* Private */
        private _get(endpoint: string, query?: [string, string | number | null][]): Promise<Buffer | { [k: string]: any }>;

    }

    export { AzurLaneClient as Client };

//#endregion classes
//#region types

    export type BriefData = {
        item: BriefItemData;
        score: number;
    };

    export type BriefItemData = {
        id: string;
        name: string;
        rarity: string;
        type: string;
        affiliation: string;
        stats: BriefStatsData;
        url: string;
        thumbnail: string;
    };

    export type BriefStatsData = {
        firepower: string;
        health: string;
        antiAir: string;
        speed: string;
        airPower: string;
        torpedo: string;
    };

    export type DetailedData = {
        item: DetailedItemData;
        score: number;
    };

    export type DetailedItemData = {
        pageURL: string;
        names: DetailedNamesData;
        constructionTime: string;
        rarity: string;
        class: string;
        id: string;
        nationality: string;
        type: string;
        base: DetailedStatsData;
        max: DetailedStatsData;
        max20: DetailedStatsData;
        speed: number;
        reinforcementValue: DetailedReinforcementValueData;
        scrapIncome: DetailedScrapIncomeData;
        equipment: DetailedEquipmentData[];
        images: DetailedImageData[];
        icon: string;
        chibi: string;
    };

    export type DetailedStatsData = {
        armor: string;
        reload: number;
        oilUsage: number;
        antiSub: number;
    } & BriefStatsData;

    export type DetailedEquipmentData = {
        efficiency: string;
        equippable: string;
    };

    export type DetailedImageData = {
        name: string;
        url: string;
    };

    export type DetailedNamesData = {
        en: string;
        cn: string;
        jp: string;
    };

    export type DetailedReinforcementValueData = {
        firepower: number;
        torpedo: number;
        airPower: number;
        reload: number;
    };

    export type DetailedScrapIncomeData = {
        coin: number;
        oil: number;
        medal: number;
    };

    export type EmbedData = {
        title: string;
        url: string;
        color: number;
        timestamp: string;
        footer: EmbedFooterData;
        thumbnail: EmbedThumbnailData;
        fields: EmbedFieldData[];
    };

    export type EmbedFieldData = {
        name: string;
        value: string;
        inline: boolean;
    };

    export type EmbedFooterData = {
        iconURL: string;
        text: string;
    };

    export type EmbedThumbnailData = {
        url: string;
    };

//#endregion types

}
