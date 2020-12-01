import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-featured',
  templateUrl: './course-featured.component.html',
  styleUrls: ['./course-featured.component.css']
})
export class CourseFeaturedComponent implements OnInit {

  // constructor() { }
  constructor(public router:Router){}
  
  ngOnInit(): void {
  }

}
