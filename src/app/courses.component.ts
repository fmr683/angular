import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //<courses>
    template: `<h2>{{ "Title:" +  getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>

        <button class="btn btn-primary" [class.active]="isActive">Click</button>
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'red' : 'green'">Click2</button>

        <div (click)="onDiv($event)">
            <button class="btn btn-primary" (click)="onSave($event)">Event</button>
        </div>

        <Input  (keyup.enter)="onKey()" />



        <Input [(ngModel)]="email" (keyup.enter)="onEmail2()" ngDefaultControl />
<br/>
        {{ course.title | uppercase }}<br/>
        {{ course.students | number }}<br/>
        {{ course.rating | number:'2.1-1' }}<br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }}<br/>
        {{ course.releaseDate }}<br/>

        {{ text | summary }}
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "";
    colSpan = 2;
    email = "me@example.com";

    isActive = false;

    text = "ssjf ajsdf jasdjf asdfjlasdjf lsld flsdjflka jsldkjfl asjdlfjasldfj lasjdlf jasldj flsjdfl jasldfjl";

    course = {
        title: "hello this is title",
        rating: 233.433434,
        students: 123243,
        price: 190.23,
        releaseDate: new Date(2016, 3, 1)
    }

    getTitle() {
        return this.title
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }


    onSave($event){
        $event.stopPropagation(); // will stop parent event
        alert("hello world" + $event);
    }

    onDiv($event) {
        alert("div" + $event);
    }

    onKey() {
        alert("Entered")
    }

    onEmail(value) {
        alert(value);
    }

    onEmail2() {
        alert(this.email);
    }
}