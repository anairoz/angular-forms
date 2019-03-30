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
    submitted = false;
    userModel = new User('Rob', 'user@test.com', 2312311111, 'default', 'morning', true);
    errorMsg = '';

    constructor( public _enrollmentService: EnrollmentService){}

    validateTopic(value){
        if (value === 'default'){
            this.topicHasError = true;
        }
        else {
        this.topicHasError = false;
        }
    }

    onSubmit(userForm){
        console.log(userForm);
        // this.submitted = true;
        // this._enrollmentService.enroll(this.userModel)
        //     .subscribe(
        //         data => console.log('Success!', data),
        //         error => this.errorMsg = error.statusText
        //     )
    }
}
