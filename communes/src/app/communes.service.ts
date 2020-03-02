import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { Commune } from './commune';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunesService {


  private communes :Commune[];
change: EventEmitter<Commune[]> = new EventEmitter;

  constructor(private httpclient: HttpClient) { }


  getCommuneByCodePostal(cp: string) {
  
    
      this.httpclient.get<Commune[]>(`${environment.serverUrl}/rest/communes/cp/${cp}`)
                .subscribe((datas) => {
                  this.communes = datas;
                  datas.forEach(v => console.log(v.nom));
                  this.change.emit(this.communes);
                })

  }


}
