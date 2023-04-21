import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  teacher: Teacher=new Teacher();
  id!:number;
  constructor(private authService: AuthServiceService, private router: Router,private route:ActivatedRoute){}
  ngOnInit(): void {
   this.id= this.route.snapshot.params['id'];
   this.authService.getTeacherById(this.id).subscribe(data=>
    {this.teacher=data;});
    throw new Error('Method not implemented.');
  }

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
    this.authService.updateTeacherById(this.id,this.teacher).subscribe(
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



