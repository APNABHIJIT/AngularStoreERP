import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bulk-orders',
  templateUrl: './bulk-orders.component.html',
  styleUrls: ['./bulk-orders.component.scss']
})
export class BulkOrdersComponent implements OnInit {

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