import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-indent-management',
  templateUrl: './indent-management.component.html',
  styleUrls: ['./indent-management.component.scss']
})
export class IndentManagementComponent implements OnInit {

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
