import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Employee } from '../../models/Employee';
import { CommonService } from '../../_services/CommonService'
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Basic } from '../../_validators/basic.validator';

@Component({
  selector: 'ngx-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']

})
export class EmployeeComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    const url: Observable<string> = route.url.pipe(
      map((segments) => segments.join(""))
    );
    url.subscribe((data) => {
      this.url = data;
    });
    console.log("URL : " + this.url);
  }
  url: string;
  empdata: Employee[] = [];
  first: number = 0;
  offset: number = 10;
  employee: Employee = new Employee();
  employeeForm: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      email: ["", Basic.isRequired],
      employee_id: [""],
      is_active: [""],
      locations: [""],
      name: ["", Basic.isRequired],
      passcode: ["", Basic.isRequired],
      password: ["", Basic.isRequired],
      phone: ["", Basic.isRequired],
      roles: ["", Basic.isRequired],
      type: ["", Basic.isRequired],
      username: ["", Basic.isRequired],
      
    });
    this.getAllEmployee();

  }

  get f() {
    return this.employeeForm.controls;
  }

  // For alertDeactivate
  alertDeactivate() {
    console.log('1');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Employee will be deactivated!',
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

  // For alertActivate
  alertActivate() {
    console.log('2');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Employee will be activated',
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
          'Your imaginary file has been activate.',
          'success'
        )
      }
    })
  }

  getAllEmployee() {
    /* let empModel = {};
    empModel = JSON.parse(JSON.stringify(this.employee));
    empModel["type"] = this.employee.type; */
    this.commonService.get("pos/getAllEmployee")
      .subscribe(data => {
        console.log("===data=com==");
        console.log(data);
        this.empdata = data;
      });
    /* this.commonService
        .post("pos/getAllEmployee", empModel)
        .subscribe((data) => {
          
        }); */

  }

  saveEmployee(e) {
    console.log(e.target);
    console.log('saveEmployee');
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    let empModel = {};
    empModel = JSON.parse(JSON.stringify(this.employee));
    /* empModel["locations"] = 'nagpur'; //locations:nagpur (String)
    empModel["type"] = 'permanent'; //type:permanent (String)
    empModel["Roles"] = 'admin'; //Roles:admin (String) */
    console.log('before post');
    this.commonService
        .post("pos/addEmp", empModel)
        .subscribe((data) => {
          console.log(data);
          if(data.res_code ==200){
            this.getAllEmployee();
          }
        });
  }

  resetData() {
    this.employeeForm.reset();
  }
}
