import { Injectable } from '@angular/core';
import { addDoc, collection } from 'firebase/firestore';
import { SessionDetails } from '../models/session-details';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor(private data: DataService) {}

  async StartSession(session: SessionDetails): Promise<string> {
    const docRef = await addDoc(collection(this.data.db, "sessions"), {
      sessionName: session.sessionName,
      ownerName: session.userName,
    });

    return docRef.id;
  }
}
