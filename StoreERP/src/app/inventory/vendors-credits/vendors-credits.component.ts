import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-vendors-credits',
  templateUrl: './vendors-credits.component.html',
  styleUrls: ['./vendors-credits.component.scss']
})
export class VendorsCreditsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  exportError() {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}
