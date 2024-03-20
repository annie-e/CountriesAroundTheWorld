/*
    Name: E Hyun (Annie) Kim 
    Date: Aug 12, 2022 
    File Name: app.component.ts
*/

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NationDialogComponent } from './nation-dialog/nation-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties 
  nations: any; 
  continents = ["All", "Africa", "Asia", "Europe", "North America", "South America", "Antarctica", "Oceania"];
  continentChosen = "All"; 
  fullNations: any; 

  // inject HttpClient service 
  constructor(http: HttpClient, private dialog: MatDialog, private info:MatDialog) {
    const URL = "assets/country.json";

    // fetch country JSON
    http.get(URL).subscribe({
      // success
      next: (json:any) => {
        // or let obj: any = json; obj.Country; 
        this.nations = json.Country; // nations is intended for an array of countries but json is a single object
        this.nations.sort((n1:any, n2:any) => {
          return n1.Name.localeCompare(n2.Name);
        })
        console.log("loaded JSON: " + this.nations.length);
        console.log(this.nations[0]);

        // change nations array when continent changes 
        this.fullNations = this.nations; 
        this.handleContientChange();
      },
      // failed
      error: err => console.log(err.message)
    });
  }

  // generate a flag src URL based on the 2-digit country code 
  getFlagName(nation: any): string
  {
    let url = "assets/flags/" + nation.Code2.toLowerCase() + ".jpg";
    return url;
  }

  // open dialog when user click on a card 
  openDialog(nation: any) {
    let config = new MatDialogConfig();
    config.width = "80%";
    config.height = "auto";
    config.data = nation; 

    // open the dialog 
    this.dialog.open(NationDialogComponent, config);
  }

  openInfo() {
    let config = new MatDialogConfig();
    config.width = "50%";
    config.height = "auto";

    // open the dialog 
    this.info.open(InfoDialogComponent, config);
  }

  handleContientChange() {    
    // reset the nations to the full nations array 
    this.nations = this.fullNations; 
    if(this.continentChosen != "All") {
      // filter nations array as per the continent chose 
      this.nations = this.nations.filter((n: any) => n.Continent == this.continentChosen);
      //console.log(this.nations.length);
    } else {
      // if all is chosen, reset the nations to the full nations array 
      this.nations = this.fullNations; 
    }
  }
}
