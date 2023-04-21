import { Component } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  constructor(private authService: AuthServiceService, private router: Router){}
  course: Course= new Course();

  isSuccessful = false;
  isFailed = false;

  form = new FormGroup(
    {
      subname: new FormControl("",[Validators.required,Validators.minLength(3)]),
      subid: new FormControl("",[Validators.required,Validators.minLength(2)]),
      price: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[0-9]*$")])
      
    }
  );

  get f()
  {
    return this.form.controls;
  }
  
  onSubmit(){
    this.authService.createCourse(this.course).subscribe(
      data=>{console.log('Success',data);
      this.goToCourseList();
      this.isSuccessful=true;
      this.isFailed=false;
    },
    err =>
    {
      console.log('FAILURE',err);
      this.goToCourseList();
      this.isSuccessful=false;
      this.isFailed=true;
    }
    );  };

    goToCourseList()
    {
      this.router.navigate(['/course']);
    }
}
