import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-sales',
  templateUrl: './customer-sales.component.html',
  styleUrls: ['./customer-sales.component.scss']
})
export class CustomerSalesComponent implements OnInit {

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
