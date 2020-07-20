import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../csc.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.scss']
})
export class CsrComponent implements OnInit {

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  constructor(private country:CountriesService, private router: Router) { }

  ngOnInit() {
    this.getCountries();
    console.log("test");
  }


  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue) {
    console.log("ccc "+countryValue);
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.countryInfo[countryValue]);
  }
  

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
  create_csr() : void {
    
  }    

}
