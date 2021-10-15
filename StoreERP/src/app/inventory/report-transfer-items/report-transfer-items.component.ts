import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-report-transfer-items',
  templateUrl: './report-transfer-items.component.html',
  styleUrls: ['./report-transfer-items.component.scss']
})
export class ReportTransferItemsComponent implements OnInit {

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
        title: 'Your file downloaded',
        showConfirmButton: false,
        timer: 1500
      })
    }
}
