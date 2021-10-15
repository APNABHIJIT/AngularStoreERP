import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-kot-items',
  templateUrl: './kot-items.component.html',
  styleUrls: ['./kot-items.component.scss']
})
export class KotItemsComponent implements OnInit {

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
