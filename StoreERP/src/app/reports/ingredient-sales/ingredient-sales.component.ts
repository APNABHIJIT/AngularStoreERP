import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ingredient-sales',
  templateUrl: './ingredient-sales.component.html',
  styleUrls: ['./ingredient-sales.component.scss']
})
export class IngredientSalesComponent implements OnInit {

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
