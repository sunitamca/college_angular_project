import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

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
    this.router.navigate(['/teachers']);
  }
} 


