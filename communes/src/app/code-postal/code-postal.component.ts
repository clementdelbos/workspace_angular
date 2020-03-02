import { Component, OnInit } from '@angular/core';
import { CommunesService } from '../communes.service';


@Component({
  selector: 'app-code-postal',
  templateUrl: './code-postal.component.html',
  styleUrls: ['./code-postal.component.css']
})
export class CodePostalComponent implements OnInit {

  codePostal: string;

  constructor(private communeservice : CommunesService) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.communeservice.getCommuneByCodePostal(this.codePostal);
//console.log(this.codePostal);

  }

}
