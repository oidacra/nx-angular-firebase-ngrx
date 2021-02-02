import { HttpClient, HttpParams } from '@angular/common/http';
import { getAllVakis, getSelected } from './../+state/vakers.selectors';
import { Store } from '@ngrx/store';
import { init } from './../+state/vakers.actions';
import { Recompensas, Vaki } from '@vaki-challenge/interfaces';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';

import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VakersService {
  public vakis$ = this.store.select(getAllVakis).pipe(
    tap((vakis) => {
      if (!vakis.length) {
        this.store.dispatch(init());
      }
    }),
    filter((vakis) => vakis !== null)
  );
  public selectedVaki$ = this.store.select(getSelected);

  getAll(): Observable<Vaki[]> {
    return this.firestore
      .collection<Vaki>('vakis')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((vakis: Vaki[]) =>
          vakis.map((vaki: Vaki) => {
            const start_date = (vaki.start_date as unknown) as firebase.firestore.Timestamp;
            const close_date = (vaki.close_date as unknown) as firebase.firestore.Timestamp;
            return {
              ...vaki,
              ...{ start_date: start_date.seconds },
              ...{ close_date: close_date.seconds },
            };
          })
        )
      );
  }

  getRecompensasByVaki(documenteId: string): Observable<Recompensas[]> {
    return this.firestore
      .collection('vakis')
      .doc(documenteId)
      .collection<Recompensas>('recompensas')
      .valueChanges({ idField: 'id' });
  }

  // Use Cloud function to check recompensa
  availabilityRecompensa(vakiId: string, recompensaId: string) {
    const params = new HttpParams();
    params.append('vaki', vakiId);
    params.append('recompensa', recompensaId);
    return this.http.get<Recompensas>(
      'https://us-central1-vaki-project-d00bd.cloudfunctions.net/checkDisponibilidad',
      { params }
    );
  }

  constructor(
    private firestore: AngularFirestore,
    readonly store: Store,
    private http: HttpClient
  ) {}
}
