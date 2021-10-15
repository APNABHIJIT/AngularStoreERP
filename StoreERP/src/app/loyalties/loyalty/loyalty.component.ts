import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For alertActivate
  alertDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Loyalty will be Deleted',
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
