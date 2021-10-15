import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// For alertActivate
alertDelete(){
  Swal.fire({
    title: 'Are you sure?',
    text: 'Your Charge will be Deleted',
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
