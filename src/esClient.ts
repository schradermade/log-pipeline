import dotenv from 'dotenv';
dotenv.config();

import { Client } from '@opensearch-project/opensearch';

const esUrl = process.env.BONSAI_URL;
const esUsername = process.env.BONSAI_USERNAME;
const esPassword = process.env.BONSAI_PASSWORD;

if (!esUrl || !esUsername || !esPassword) {
  throw new Error(
    'Missing required environment variables for Elasticsearch connection.'
  );
}

const esClient = new Client({
  node: esUrl,
  auth: {
    username: esUsername,
    password: esPassword,
  },
  // headers: {
  //   'X-Bonsai-Client': 'elasticsearch-js', // Specific Bonsai header
  // },
  sniffOnStart: false,
  sniffInterval: false,
  disablePrototypePoisoningProtection: true,
  // Use tls to configure SSL for self-signed certificates
  // tls: {
  //   rejectUnauthorized: false, // Bypass SSL certificate verification
  // },
});

export default esClient;
