import { initializeApp } from "firebase/app";

export default initializeApp(
  JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_API_KEY!)
);