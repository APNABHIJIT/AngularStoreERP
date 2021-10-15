import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-merchant-attribute-values',
  templateUrl: './merchant-attribute-values.component.html',
  styleUrls: ['./merchant-attribute-values.component.scss']
})
export class MerchantAttributeValuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For alertDeactivate
alertDelete(){
  Swal.fire({
    title: 'Are you sure?',
    text: 'Your Attribute value will be Deleted',
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
