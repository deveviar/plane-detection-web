import { NextResponse } from "next/server"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
const firebaseConfig = {
  databaseURL: process.env.DATABASE_URL,
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
export async function GET() {

  try {
    const dbRef = ref(db, "link");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return NextResponse.json({ link: snapshot.val() });
    } else {
      return NextResponse.json({ link: null });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}









