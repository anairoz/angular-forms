import { Component } from '@angular/core';
import {User} from './user';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    topics = ['Angular', 'React', 'Html']
    topicHasError = true;

    userModel = new User('', 'user@test.com', 23123, 'default', 'morning', true);

    constructor( private _enrollmentService: EnrollmentService){}

    validateTopic(value){
        if (value === 'default'){
            this.topicHasError = true;
        }
        else {
        this.topicHasError = false;
        }
    }

    onSubmit(){
        this._enrollmentService.enroll(this.userModel)
            .subscribe(
                data => console.log('Success!', data),
                error => console.error('Error!', error)
            )
    }
}
