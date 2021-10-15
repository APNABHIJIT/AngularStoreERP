import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-printer-labels',
  templateUrl: './printer-labels.component.html',
  styleUrls: ['./printer-labels.component.scss']
})
export class PrinterLabelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// For alertDeactivate
alertDelete(){
  Swal.fire({
    title: 'Are you sure?',
    text: 'Your Printer Label will be deleted',
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
