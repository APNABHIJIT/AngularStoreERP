import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.scss']
})
export class CustomerItemsComponent implements OnInit {

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
