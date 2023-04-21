import { Component } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {

  course!: Course;
  id!:number;
  
  constructor(private authService: AuthServiceService, private router: Router,private route:ActivatedRoute){}
 
 
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
   this.authService.getCourseById(this.id).subscribe(data=>
    {this.course=data;});
  }

  list()
  {
    this.router.navigate(['/courses']);
  }
}
