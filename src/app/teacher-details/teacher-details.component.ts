import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent {
  teacher!: Teacher;
  id!:number;
  
  constructor(private authService: AuthServiceService, private router: Router,private route:ActivatedRoute){}
 
 
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
   this.authService.getTeacherById(this.id).subscribe(data=>
    {this.teacher=data;});
    
  }

  list()
  {
    this.router.navigate(['/teacher']);
  }


}
