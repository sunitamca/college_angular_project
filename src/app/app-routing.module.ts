import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AssignComponent } from './assign/assign.component';
import { ViewComponent } from './view/view.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

const routes: Routes = [
  {path:"teachers", component: TeacherListComponent},
  {path:"home", component: HomeComponent},
  {path: '', redirectTo:"home",pathMatch:"full"},
  {path: "createteacher",component: CreateTeacherComponent},
  {path:"courses", component: CourseListComponent},
  {path: "createcourse",component: CreateCourseComponent},
  {path: "updateTeacher/:id",component: UpdateTeacherComponent},
  {path:"assign",component:AssignComponent},
  {path: "updateCourse/:id",component: UpdateCourseComponent},
  {path:"view/:id", component: ViewComponent},
  {path: "getcourseById/:id",component: CourseDetailsComponent},
  {path:"courseDetails", component: CourseDetailsComponent},
  {path:"teacherDetails", component: TeacherDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
