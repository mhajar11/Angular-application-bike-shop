import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class DataService {//classe pour importer les donnes de json
  constructor(private http: HttpClient) {} // on utilise les https

  getBikes(): Observable<any[]> {
    return this.http.get<any[]>('/data/bikes.json'); // utiliser le json pour les bikes 
  }

  getAccessories(): Observable<any[]> {
    return this.http.get<any[]>('/data/accessories.json'); // pareil pour les accesoires 
  }
}
