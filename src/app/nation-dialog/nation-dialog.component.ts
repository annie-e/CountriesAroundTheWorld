/*
    Name: E Hyun (Annie) Kim 
    Date: Aug 12, 2022 
    File Name: nation-dialog.component.ts
*/

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nation-dialog',
  templateUrl: './nation-dialog.component.html',
  styleUrls: ['./nation-dialog.component.css']
})
export class NationDialogComponent{

  // properties 
  nation: any; // selected country info 
  map = "";  // URL for map image file 
  colHeader = ["name", "district", "population"]; 
  cities: any; // to store city.json file information
  capitalCity = "";

  constructor(@Inject(MAT_DIALOG_DATA) data: any, http: HttpClient) {
    // get data from the parent 
    this.nation = data; 

    // construct the map name 
    this.map = "assets/maps/" + this.nation.Code.toLowerCase() + ".gif";

    // grab the city json file info 
    const URL = "assets/city.json"; 
    http.get(URL).subscribe({
      next: (json:any) => {
        this.cities = json.City.filter((c: any) => c.CountryCode == this.nation.Code);
        this.cities.sort((c1: any, c2:any) => {
          return c1.Name.localeCompare(c2.Name);
        });
        console.log(this.cities.length);

        // finding the capital city of a nation 
        this.cities.forEach((c:any) => {
          if(c.ID == this.nation.Capital) {
            this.capitalCity = c.Name;
          }
        });
      }, 
      error: e => console.log(e.message)
    });    
  }
}
