export default class LogTask {
    httpResponseURL: string;
    httpStatus: number;
    httpResponseText: string;
    errorMessage: string;
    code: 'HTTP_ERROR' | 'OTHERS';
    date: Date;
    constructor(res: any);
}
