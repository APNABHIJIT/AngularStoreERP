import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-vendor-return',
  templateUrl: './vendor-return.component.html',
  styleUrls: ['./vendor-return.component.scss']
})
export class VendorReturnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public show: boolean = false;
  public buttonName: any = "More Filters";
  toggle() {
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Less Filters";
    else
      this.buttonName = "More Filters";
  }

  exportError() {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

  AlertDetails() {
    Swal.fire({
      title: ' Vendor Return Details',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  AlertPDF() {
    Swal.fire({
      title: ' Vendor Return PDF',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
