import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-item-price-category',
  templateUrl: './item-price-category.component.html',
  styleUrls: ['./item-price-category.component.scss']
})
export class ItemPriceCategoryComponent implements OnInit {

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
