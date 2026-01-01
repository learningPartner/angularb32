import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-show-less-more',
  imports: [SlicePipe,NaPipe],
  templateUrl: './show-less-more.html',
  styleUrl: './show-less-more.css',
})
export class ShowLessMore {
  @Input() sampleText: string = ""
  @Input() textLimit: number = 10;

  isToggle: boolean = true;

  onToggleText() {
    this.isToggle = !this.isToggle;
  }
}
