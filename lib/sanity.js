import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'TON_PROJECT_ID', // récupère ça depuis sanity.io/manage
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});
