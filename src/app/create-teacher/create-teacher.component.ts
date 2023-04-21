import { Component } from '@angular/core';
import { Teacher } from '../teacher';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent {
  constructor(private authService: AuthServiceService, private router: Router){}
  teacher: Teacher= new Teacher();

  isSuccessful = false;
  isFailed = false;

  form = new FormGroup(
    {
      firstname: new FormControl("",[Validators.required,Validators.minLength(3)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      lastname: new FormControl("",[Validators.required,Validators.minLength(3)]),
      cont: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
      username: new FormControl("",[Validators.required,Validators.minLength(4)]),
      pass: new FormControl("",[Validators.required,Validators.minLength(3)])

    }
  );

  get f()
  {
    return this.form.controls;
  }
  
  onSubmit(){
    this.authService.createTeacher(this.teacher).subscribe(
      data=>{console.log('Success',data);
      this.goToTeacherList();
      this.isSuccessful=true;
      this.isFailed=false;
    },
    err =>
    {
      console.log('FAILURE',err);
      this.goToTeacherList();
      this.isSuccessful=false;
      this.isFailed=true;
    }
    );  };

    goToTeacherList()
    {
      this.router.navigate(['/teachers']);
    }
}
