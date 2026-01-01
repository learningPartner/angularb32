import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {


  progressLocalData: string = "v--011"
  @Input() progressValue: number = 0;
  @Input() progressColorClassName: string = '';
}
