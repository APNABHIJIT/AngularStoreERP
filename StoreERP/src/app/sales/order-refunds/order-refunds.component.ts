import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-order-refunds',
  templateUrl: './order-refunds.component.html',
  styleUrls: ['./order-refunds.component.scss']
})
export class OrderRefundsComponent implements OnInit {

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