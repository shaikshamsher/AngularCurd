import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent  {

  employees : Employee[]=[
    {
      id:1,
      name:'Mark',
      gender:'male',
      contactPreference:'Email',
      email:'mark@pragimtech.com',
      dateOfBirth: new Date ('11/24/1987'),
      department:'IT',
      isActive: true,
      photoPath:'assets/images/mark.png'
    },
    {
      id:2,
      name:'Mary',
      gender:'female',
      contactPreference:'phone',
      phoneNumber:93939083908,
      dateOfBirth: new Date ('11/24/1987'),
      department:'IT',
      isActive: true,
      photoPath:'assets/images/mary.png'
    },
    {
      id:3,
      name:'John',
      gender:'male',
      contactPreference:'Email',
      email:'john@pragimtech.com',
      dateOfBirth: new Date ('11/24/1981'),
      department:'HR',
      isActive: true,
      photoPath:'assets/images/john.png',
    }
  ]

}
