import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-food-recipe',
  templateUrl: './food-recipe.component.html',
  styleUrls: ['./food-recipe.component.scss']
})
export class FoodRecipeComponent implements OnInit {

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
