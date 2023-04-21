import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course= new Course();
  id!:number;
  constructor(private authService: AuthServiceService, private router: Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.authService.getCourseById(this.id).subscribe(data=>
      {this.course=data;});
  }
  

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
    this.authService.updateCourseById(this.id ,this.course).subscribe(
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



