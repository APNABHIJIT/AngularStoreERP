import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For alertDeactivate
  alertDeactivate() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your location will be deactivated!',
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

  ActivateStatus() {
    Swal.fire({
      icon: 'success',
      title: 'Your Status Activated',
      text: 'Your location will be Aactivated!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}


