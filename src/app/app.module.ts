import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AssignComponent } from './assign/assign.component';
import { ViewComponent } from './view/view.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    HomeComponent,
    CourseListComponent,
    CreateTeacherComponent,
    CreateCourseComponent,
    UpdateTeacherComponent,
    FooterComponent,
    UpdateCourseComponent,
    AssignComponent,
    ViewComponent,
    CourseDetailsComponent,
    TeacherDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }