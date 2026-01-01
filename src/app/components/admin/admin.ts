import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../user/user';
import { SlicePipe } from '@angular/common';
import { ShowLessMore } from '../../resuableComponent/show-less-more/show-less-more';
import { Alert } from "../../resuableComponent/alert/alert";
import { Tabs } from "../../resuableComponent/tabs/tabs";
import { ProgressBar } from "../../resuableComponent/progress-bar/progress-bar";

@Component({
  selector: 'app-admin',
  imports: [User, SlicePipe, ShowLessMore, Alert, Tabs, ProgressBar],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit {

  sampleText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."

  @ViewChild('textRef') textRef!:ElementRef;
  @ViewChild('modalRef') modalRef!: ElementRef;

  @ViewChild(ProgressBar) progressAbrRef!: ProgressBar;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.openModel()
    debugger;
    const data = this.progressAbrRef;
  }

  onTabChnages(tabName: string) {
    
  }

  readText() {
  //  const textElement = document.getElementById("txtName") as any;
  //  if(textElement) {
  //   alert(textElement['value'])
  //  }
  const textVal =  this.textRef.nativeElement.value;
  debugger;
  alert(textVal)
  }

  openModel() {
    this.modalRef.nativeElement.style.display = "block"
  }

  closeModal() {
    this.modalRef.nativeElement.style.display = "none"
  }
 
}
