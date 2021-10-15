import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-report-stock-adjust-items',
  templateUrl: './report-stock-adjust-items.component.html',
  styleUrls: ['./report-stock-adjust-items.component.scss']
})
export class ReportStockAdjustItemsComponent implements OnInit {

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
