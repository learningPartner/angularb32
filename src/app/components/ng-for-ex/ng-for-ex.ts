import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaPipe } from '../../pipes/na-pipe';
import { FullNamePipe } from '../../pipes/full-name-pipe';
import { Ellipsis } from '../../directives/ellipsis';
import { ShowLessMore } from "../../resuableComponent/show-less-more/show-less-more";
import { Alert } from '../../resuableComponent/alert/alert';
import { ProgressBar } from "../../resuableComponent/progress-bar/progress-bar";

@Component({
  selector: 'app-ng-for-ex',
  imports: [NgFor, FormsModule, NgIf, NgClass, NaPipe, FullNamePipe, Ellipsis, ShowLessMore, Alert, ProgressBar],
  templateUrl: './ng-for-ex.html',
  styleUrl: './ng-for-ex.css',
})
export class NgForEx {

  cityList: string[] =
    ["Pune", "Nagpur", "Mumbai", "Jaipur"];
  rollNoList: number[] =
    [111, 112, 113, 114, 115, 116, 117];
    alertType: string = "Error"

  studentList: any[] = [
    { name: 'AAA', attendancePer:20, address:"PLot No 123, Near sbi Atm, Manishs Nagar, Nagpur", surname: 'QQQ', middleName: '', city: 'Nagpur', isActive: true },
    { name: 'BBB', attendancePer:50, address:"", surname: 'WWW', middleName: 'bbb', isActive: true },
    { name: 'CCC', attendancePer:10, address:"PLot No 65, Near sbi Atm, Manishs Nagar, Nagpur", surname: '', middleName: 'cc', city: '', isActive: false },
    { name: 'DDD', attendancePer:75,   surname: 'TTT', middleName: 'dd', city: 'Nagpur', isActive: true },
    { name: 'EEE', attendancePer:100, address:"Manisha, Nagpur", surname: null, middleName: 'eee', city: 'Mumbai', isActive: false },
    { name: 'FFF', attendancePer:80, address:"PLot No 23, eee 222 22, Manishs Nagar, Nagpur", surname: 'UU', middleName: 'fff', city: undefined, isActive: false }
  ];

  coursernMAe = "Angular"
}
