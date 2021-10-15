import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-merchant-payment-methods',
  templateUrl: './merchant-payment-methods.component.html',
  styleUrls: ['./merchant-payment-methods.component.scss']
})
export class MerchantPaymentMethodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deactivate(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Your Payment Method will be deactivated!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deactivated!',
          'Your file has been Deactivated.',
          'success'
        )
      }
    })
  }
}
