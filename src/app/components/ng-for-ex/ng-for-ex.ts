import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for-ex',
  imports: [NgFor, FormsModule, NgIf, NgClass],
  templateUrl: './ng-for-ex.html',
  styleUrl: './ng-for-ex.css',
})
export class NgForEx {

  cityList: string[] =
    ["Pune", "Nagpur", "Mumbai", "Jaipur"];
  rollNoList: number[] =
    [111, 112, 113, 114, 115, 116, 117];

  studentList: any[] = [
    { name: 'AAA', surname: 'QQQ', city: 'Nagpur', isActive: true },
    { name: 'BBB', surname: 'WWW', city: 'Jaipur', isActive: true },
    { name: 'CCC', surname: 'RRR', city: 'Pune', isActive: false },
    { name: 'DDD', surname: 'TTT', city: 'Nagpur', isActive: true },
    { name: 'EEE', surname: 'QQYYYQ', city: 'Mumbai', isActive: false },
    { name: 'FFF', surname: 'UU', city: 'Jaipur', isActive: false }
  ];

  coursernMAe = "Angular"
}
