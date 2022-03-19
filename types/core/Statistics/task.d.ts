export default class StatisticsTask {
    userId: string;
    randomSchema: string;
    timeSchema: string;
    get cookieEnabled(): boolean;
    get platformType(): "mobile" | "pc";
    get platformSchema(): string;
    setCookie(name: any, value: any): void;
    getCookie(name: any): string;
    delCookie(name: any): void;
    get screenSchema(): string;
    uuid(): string;
    init(cookieId: any): void;
    constructor(cookieId: any);
}
