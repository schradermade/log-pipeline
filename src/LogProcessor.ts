import { logMethod } from './decorators/logMethod';

export class LogProcessor {
  private logs: string[];

  constructor() {
    this.logs = [];
  }

  addLog(log: string): void {
    this.logs.push(log);
  }

  @logMethod
  processLogs(): void {
    console.log('Processing logs..."');
    this.logs.forEach((log) => console.log(log));
  }

  getLogs(): string[] {
    return this.logs;
  }
}
