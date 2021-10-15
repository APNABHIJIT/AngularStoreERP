import { Component, OnInit } from '@angular/core';
 import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-indent-consolidation',
  templateUrl: './indent-consolidation.component.html',
  styleUrls: ['./indent-consolidation.component.scss']
})
export class IndentConsolidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 AlertError(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'There are no records in the selected criteria',
  })
 }
}
