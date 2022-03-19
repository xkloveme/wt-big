import Factory from '@dorring/sdk/core/Base/factory';
import StatisticsTask from '@dorring/sdk/core/Statistics/task';
export default class Statistics extends Factory<Statistics> {
    cookieId: string;
    task: StatisticsTask;
    startTime: number;
    init(): void;
}
