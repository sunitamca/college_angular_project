import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  constructor(private authService: AuthServiceService, private router: Router){}
  courses: Course[] | undefined;

  ngOnInit(): void{
    this.getCourse();
  }
 private getCourse()
 {
  this.authService.getAllCourse().subscribe(data=>
    {this.courses=data;});
 
  }
  deleteCourse(id: number)
  {
    this.authService.deleteCourseById(id).subscribe( 
      data=>

      {console.log(data);
       this.router.navigate([`course`]);}
    );
  }
 updateCourse(id: number)
{
  this.router.navigate(['updateCourse',id]);
}
reloadpage()
{
  window.location.reload();
}

getcourseById(id: number)
{
  this.router.navigate(['getcourseById',id]);
}
}
