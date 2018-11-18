import { Component , OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { from, empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


 data  = [
  {name: 'Ahmed', email: 'Ahmed@gmail.com', country: 'Tunisia', CTN: 'tn'},
  {name: 'Jamel', email: 'jamel@gmail.com', country: 'Algeria' , CTN: 'dz'},
  {name: 'Anja', email: 'anja@gmail.com', country: 'Germany',  CTN: 'de'},
  {name: 'Jeorge', email: 'jeorge@gmail.com', country: 'France', CTN: 'fr'},
  {name: 'Ali', email: 'ali@gmail.com', country: 'Iraq', CTN: 'iq'},
  {name: 'Micheal', email: 'micheal@gmail.com', country: 'USA', CTN: 'us'},
];
data1 = {name: '', email: '', country: '', CTN: ''};
title = 'angular705';
dtOptions: DataTables.Settings = {};
language: DataTables.LanguageSettings = {};
constructor(private toastr: ToastrService) {}

newData = {name: '', email: '', country: '', CTN: ''};
element = false;
valid = true;
form1 = true;
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

}

// showSuccess() {
//   this.toastr.success('Hello world!', 'Toastr fun!',
//   {timeOut: 5000});
// }
// showError() {
// this.toastr.error('everything is broken', 'Major Error', {
// timeOut: 5000,
// tapToDismiss: true
// });
// }

// messageShow() {
//   this.toastr.show('hi friends', 'showMessage', {
//     timeOut: 5000,
//     });
//   }
  ajout() {

  this.valid = false;


  this.data.push({
    name: this.newData.name,
    email: this.newData.email,
    country: this.newData.country,
    CTN: this.newData.CTN
  });
  this.toastr.success('New-Data', 'new data has been added!',
  {timeOut: 5000});

  this.newData = {name: '', email: '', country: '', CTN: ''};

}
delete(data) {

    const index: number = this.data.indexOf(data);
    if (index !== -1) {
      const confirm: boolean = window.confirm('you are sure to deleted ' + ' ' + this.data[index].name + '?');
    const  names: String = this.data[index].name;
      if (confirm === true) {
        this.data.splice(index, 1);
        this.toastr.error('', names +  ' ' + 'deleted with success' , {
          timeOut: 2000
          });
  }

}
  }
  update(data) {
    this.form1 = false;
    const index: number = this.data.indexOf(data);
    if (index !== -1) {
    this.newData = this.data[index];
    }
  }
  Down() {
    this.data = this.data;
    this.toastr.success('', 'this element updated with success' , {
      timeOut: 5000
      });
      this.newData = {name: '', email: '', country: '', CTN: ''};
  }
}



