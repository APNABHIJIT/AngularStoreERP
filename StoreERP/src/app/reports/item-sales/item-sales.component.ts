import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-item-sales',
  templateUrl: './item-sales.component.html',
  styleUrls: ['./item-sales.component.scss']
})
export class ItemSalesComponent implements OnInit {

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
