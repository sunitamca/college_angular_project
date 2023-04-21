import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Teacher } from './teacher';
import { Course } from './course';
import { Params } from '@angular/router';


const TEACHER = 'http://localhost:8080/teacher/';
const COURSE = 'http://localhost:8080/course/';
const deleteTeach = 'http://localhost:8080/teacher/deleteTeacherById';
const deleteCourse = 'http://localhost:8080/course/deleteCourseById';
const updateTeacher = 'http://localhost:8080/teacher/updateTeacher';
const updateCourse = 'http://localhost:8080/course/updateCourse';
const getTeacherById = 'http://localhost:8080/teacher/getTeacherById';
const getCourseById = 'http://localhost:8080/course/getCourseById';
const assigning = 'http://localhost:8080/course/assignTeacherToCourse';
const getview = 'http://localhost:8080/view/getview';
const coursedetails = 'http://localhost:8080/course/courseDetails';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]>
  {
    return this.http.get<Teacher[]>(TEACHER+'getAllTeachers',httpOptions);
  }

  deleteTeacherById(id: number): Observable<Object>
  {
   return this.http.delete(`${deleteTeach}/${id}`);
  }
  getAllCourse(): Observable<Course[]>
  {
    return this.http.get<Course[]>(COURSE+'getAllCourse',httpOptions);
  }
deleteCourseById(id:number): Observable<Object>
{
  return this.http.delete(`${deleteCourse}/${id}`);
}
createTeacher(teacher: Teacher): Observable<Object>
{
  return this.http.post<any>(TEACHER+'createTeacher',teacher,httpOptions);
}
createCourse(course: Course): Observable<Object>
{
  return this.http.post<any>(COURSE+'createCourse',course,httpOptions);
}

updateTeacherById(id: number, teacher: Teacher): Observable<Object>
{
  return this.http.put(`${updateTeacher}/${id}`,teacher);
}
updateCourseById(id: number, course: Course): Observable<Object>
{
  return this.http.put(`${updateCourse}/${id}`,course);
}
getTeacherById(id: number): Observable<Teacher>
{
  return this.http.get<Teacher>(`${getTeacherById}/${id}`);
}
getAllCcourses(): Observable<Course[]>
{
  return this.http.get<Course[]>(COURSE+'getAllCourse',httpOptions);
}

assign(teacherid: number, courseId: number): Observable<Params>
{
  return this.http.post<Course>(`${assigning}/${teacherid}/${courseId}`,httpOptions);
}

getCourseById(id: number): Observable<Course>
{
  return this.http.get<Course>(`${getCourseById}/${id}`);
}
getview(id: number): Observable<Teacher>
{
  return this.http.get<Teacher>(`${getTeacherById}/${id}`);
}
courseDetails(id: number, course: Course): Observable<Object>
{
  return this.http.put(`${coursedetails}/${id}`,course);
}


}
