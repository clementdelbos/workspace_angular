import { Component, OnInit } from '@angular/core';
import { CommunesService } from '../communes.service';
import { Commune } from '../commune';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  nom :string;
  codePostal :string;
  communes :Commune[] = [];

  constructor(private communeservice : CommunesService) { }

  ngOnInit(): void {
    this.communeservice.change.subscribe(datas => this.communes = datas);
  }

}
