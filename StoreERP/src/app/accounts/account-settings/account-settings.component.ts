import { Component, OnInit } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen(){
    isAnimated: true;
  }
  
}
