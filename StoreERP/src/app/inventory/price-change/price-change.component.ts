import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-price-change',
  templateUrl: './price-change.component.html',
  styleUrls: ['./price-change.component.scss']
})
export class PriceChangeComponent implements OnInit {

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

    exportError() {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }

}
