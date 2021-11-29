import admin, { ServiceAccount } from 'firebase-admin';
import express from 'express';
import * as serviceAccount from '../service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(<ServiceAccount>serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 8080;

app.listen(port, function () {
  console.log('server started')
})