import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-price-categories',
  templateUrl: './price-categories.component.html',
  styleUrls: ['./price-categories.component.scss']
})
export class PriceCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// For alertDeactivate
alertDeactivate(){
  Swal.fire({
    title: 'Are you sure?',
    text: 'Your Price Category will be deactivated',
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
        'Your imaginary file has been activated.',
        'success'
      )
    }
  })
}
}
