import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';

@Component({
  selector: 'app-user',
  imports: [Field, JsonPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  
}
