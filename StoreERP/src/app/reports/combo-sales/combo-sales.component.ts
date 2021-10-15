import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-combo-sales',
  templateUrl: './combo-sales.component.html',
  styleUrls: ['./combo-sales.component.scss']
})
export class ComboSalesComponent implements OnInit {

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
