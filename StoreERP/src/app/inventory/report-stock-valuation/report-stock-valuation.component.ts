import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-report-stock-valuation',
  templateUrl: './report-stock-valuation.component.html',
  styleUrls: ['./report-stock-valuation.component.scss']
})
export class ReportStockValuationComponent implements OnInit {

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

    exportError() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'File Downloaded',
        showConfirmButton: false,
        timer: 1500
      })
    }
}
