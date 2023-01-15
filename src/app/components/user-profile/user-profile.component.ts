import { Component } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    firstName : 'kevin',
    lastName : 'durant',
    profilePictureUrl : 'https://www.basketusa.com/wp-content/themes/theme_busa_2019/_img-players/kevin-durant.png',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
    urlPicture() {
      return this.profilePictureUrl;
    }
  }
}
