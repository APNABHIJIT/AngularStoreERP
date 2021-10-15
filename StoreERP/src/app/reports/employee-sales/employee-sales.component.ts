import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee-sales',
  templateUrl: './employee-sales.component.html',
  styleUrls: ['./employee-sales.component.scss']
})
export class EmployeeSalesComponent implements OnInit {

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
