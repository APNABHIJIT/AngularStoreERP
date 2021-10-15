import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-stock-adjust',
  templateUrl: './stock-adjust.component.html',
  styleUrls: ['./stock-adjust.component.scss']
})
export class StockAdjustComponent implements OnInit {

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
