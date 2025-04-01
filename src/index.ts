import { LogProcessor } from './LogProcessor';

const logProcessor = new LogProcessor();

logProcessor.addLog({
  message:
    'I last replaced my roof at my 64th Street property on April 2nd, 2020.',
  level: 'info',
  property_description: '64th street',
});
logProcessor.processLogs();
