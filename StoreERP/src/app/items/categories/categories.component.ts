import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // For Delete
   alertDelate(){
    Swal.fire({
      title: 'Are you sure to delete the order?',
      text: 'Your Category and items in the category will be deleted',
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
          'Your imaginary file has been Deleted.',
          'success'
        )
      }
    })
  }
}
