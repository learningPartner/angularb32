import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs implements OnInit {

  @Input() tabList: string[]= [];
  @Input() activeTabName: string = '';

  @Output() onTabChange = new EventEmitter<string>();


  ngOnInit(): void {
    
  }

  setCurrentTab(tabName: string) {
    this.activeTabName = tabName;
    
    this.onTabChange.emit(tabName);
  }
}
