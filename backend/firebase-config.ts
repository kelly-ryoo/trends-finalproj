import * as admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { config } from 'dotenv';

config();

const serviceAccountPath = './service-account.json';

const hydrateServiceAccount = (
  serviceAccountPath: string
): admin.ServiceAccount => {
  const serviceAccount = JSON.parse(
    readFileSync(serviceAccountPath).toString()
  );
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  return { ...serviceAccount, privateKey };
};

admin.initializeApp({
  credential: admin.credential.cert(hydrateServiceAccount(serviceAccountPath)),
});

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };