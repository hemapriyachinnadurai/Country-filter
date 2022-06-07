import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countryAll: any[];
  country = '';
  countryList: any;
  constructor(private countryser: CountryService, private http: HttpClient) {}

  ngOnInit() {
    this.countryser.countryAPI().subscribe((res: any[]) => {
      this.countryAll = res;
      this.countryList = res;
    });
  }

  searchCountry(e) {
    let searchValue = e.target.value.toLowerCase();
    this.countryList = this.countryAll.filter((item) => {
      if (item.name) {
        if (item.name.toLowerCase().includes(searchValue)) {
          return item;
        }
      }
    });
  }
}
