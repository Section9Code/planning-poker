import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { getFirestore, Firestore} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private app: FirebaseApp;
  private analytics: Analytics;
  public db: Firestore;

  constructor() {
    console.log(`[DataDvc] setting up firebase`);
    this.app = initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.db = getFirestore();
    console.log(`[DataDvc] firebase setup complete`);
  }

}
