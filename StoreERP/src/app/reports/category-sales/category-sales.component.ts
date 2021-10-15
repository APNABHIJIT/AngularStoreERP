import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-category-sales',
  templateUrl: './category-sales.component.html',
  styleUrls: ['./category-sales.component.scss']
})
export class CategorySalesComponent implements OnInit {

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
