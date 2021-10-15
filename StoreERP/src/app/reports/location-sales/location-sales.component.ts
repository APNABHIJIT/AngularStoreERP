import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-location-sales',
  templateUrl: './location-sales.component.html',
  styleUrls: ['./location-sales.component.scss']
})
export class LocationSalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public show:boolean=false;
  public buttonName:any ="More Filters";
    toggle(){
      this.show = !this.show;

      if(this.show)
      this.buttonName = "Less Filters";
      else
      this.buttonName = "More Filters";
    }
}
