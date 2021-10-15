import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-report-charges',
  templateUrl: './report-charges.component.html',
  styleUrls: ['./report-charges.component.scss']
})
export class ReportChargesComponent implements OnInit {

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
