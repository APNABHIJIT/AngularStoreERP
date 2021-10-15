import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-report-return-item',
  templateUrl: './report-return-item.component.html',
  styleUrls: ['./report-return-item.component.scss']
})
export class ReportReturnItemComponent implements OnInit {

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
