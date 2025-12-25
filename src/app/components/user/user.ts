import { JsonPipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { VendorService } from '../../services/vendor-service';

@Component({
  selector: 'app-user',
  imports: [Field, JsonPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit,DoCheck,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  courseName: string;

  constructor() {
   console.log('constructor')
   this.courseName = "Java"; 
   //variable initialization
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


}
