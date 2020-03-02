import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { Commune } from './commune';


@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  constructor(private httpclient: HttpClient) { }


  getCommuneByCodePostal(cp: string) {
    console.log(cp);
    
      this.httpclient.get<Commune[]>(`${environment.serverUrl}/rest/communes/cp/${cp}`)
                .subscribe((datas) => {
                  datas.forEach(v => console.log(v.nom));
                })

  }


}
