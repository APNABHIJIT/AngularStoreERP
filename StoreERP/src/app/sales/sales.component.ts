import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  public show:boolean=false;
  public buttonName:any ="More Filters";
    toggle(){
      this.show = !this.show;

      if(this.show)
      this.buttonName = "Less Filters";
      else
      this.buttonName = "More Filters";
    }

  // For Delete
  alertDelate(){
    Swal.fire({
      title: 'Are you sure to delete the order?',
      text: 'The order contents will be deleted',
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


