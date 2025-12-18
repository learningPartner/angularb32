import { NgIf, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-ex',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if-ex.html',
  styleUrl: './ng-if-ex.css',
})
export class NgIfEx {

  isDiv1Visiable: boolean = true;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  details: string = "";
  selectedCaste: string = '';
  enteredMarks: number = 0;

  showDiv1() {
    this.isDiv1Visiable = true;
  }
  hideDiv1() {
    let name= "asdas";
    this.isDiv1Visiable = false; 
  }

  toggleDiv1() {
    this.isDiv1Visiable = !this.isDiv1Visiable;
  }
}
