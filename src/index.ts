import { LogProcessor } from './LogProcessor';

const logProcessor = new LogProcessor();

logProcessor.addLog('First log');
logProcessor.addLog('Second log');
logProcessor.processLogs();
