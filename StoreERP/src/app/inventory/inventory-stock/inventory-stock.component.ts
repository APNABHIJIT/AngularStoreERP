import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-inventory-stock',
  templateUrl: './inventory-stock.component.html',
  styleUrls: ['./inventory-stock.component.scss']
})
export class InventoryStockComponent implements OnInit {

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

     // For alertDeactivate
  alertDeactivate(){
     
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'There are no records in the selected criteria',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
