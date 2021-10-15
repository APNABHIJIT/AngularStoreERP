import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For alertDeactivate
  alertDeactivate(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your discount will be deactivated.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cancel',
      cancelButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
         
          'Deactivated!',
          'Your imaginary file has been deactivate.',
          'success'
        )
      }
    })
  }

  // For alertActivate
  alertDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure to delete the discount?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cancel',
      cancelButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Success',
          'Your imaginary file has been deleted.',
          'success'
        )
      }
    })
  }

}
