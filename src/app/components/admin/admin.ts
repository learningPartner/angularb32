import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-admin',
  imports: [User],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

}
