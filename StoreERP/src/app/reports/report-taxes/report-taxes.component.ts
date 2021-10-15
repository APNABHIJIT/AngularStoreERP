import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-report-taxes',
  templateUrl: './report-taxes.component.html',
  styleUrls: ['./report-taxes.component.scss']
})
export class ReportTaxesComponent implements OnInit {

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
