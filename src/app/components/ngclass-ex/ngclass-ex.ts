import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngclass-ex',
  imports: [NgClass,FormsModule, NgStyle],
  templateUrl: './ngclass-ex.html',
  styleUrl: './ngclass-ex.css',
})
export class NgclassEx {

  div1BackColor: string = 'bg-danger';

  isActive: boolean = false;

  divClassName: string = '';

  colorName: string = '';

  myCss :any = {
    color:'red',
    'background-color':'green',
    'font-size':'55px'
  }


   studentList: any[] = [
    { name: 'AAA', grade:'A', surname: 'QQQ', city: 'Nagpur', isActive: true },
    { name: 'BBB', grade:'B', surname: 'WWW', city: 'Jaipur', isActive: true },
    { name: 'CCC', grade:'C', surname: 'RRR', city: 'Pune', isActive: false },
    { name: 'DDD', grade:'A', surname: 'TTT', city: 'Nagpur', isActive: true },
    { name: 'EEE', grade:'C', surname: 'QQYYYQ', city: 'Mumbai', isActive: false },
    { name: 'FFF', grade:'B', surname: 'UU', city: 'Jaipur', isActive: false }
  ]

}
