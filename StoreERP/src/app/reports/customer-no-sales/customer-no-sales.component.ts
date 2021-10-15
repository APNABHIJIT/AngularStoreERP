import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-no-sales',
  templateUrl: './customer-no-sales.component.html',
  styleUrls: ['./customer-no-sales.component.scss']
})
export class CustomerNoSalesComponent implements OnInit {

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
