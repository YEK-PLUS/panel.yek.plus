import admin from "firebase-admin";
import getConfig from "next/config";

const {
  serverRuntimeConfig: {
    FIREBASE_project_id,
    FIREBASE_private_key,
    FIREBASE_client_email,
  },
}: { serverRuntimeConfig: { [key: string]: string } } = getConfig();

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: FIREBASE_project_id,
        privateKey: FIREBASE_private_key,
        clientEmail: FIREBASE_client_email,
      }),
    });
  } catch (error: any) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
