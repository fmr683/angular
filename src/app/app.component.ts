import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular - App';
  courses = ['course1','course2','course3'];
  viewMode = "map"

  courses2 = [
    { id: 1, name: "Course 1"},
    { id: 2, name: "Course 2"},
    { id: 3, name: "Course 3"}
  ]

  onAdd(){
    this.courses2.push({id: 4, name: "course 4"})
  }

  onRemove(course2) {
    let index = this.courses2.indexOf(course2);
    this.courses2.splice(index, 1);
  }

  onUpdate(course2) {
    course2.name = "Updated";
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  loadCourse() {
    //this.courses2;
  }
}
