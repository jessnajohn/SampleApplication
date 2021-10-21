import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
this.details=[
{name:'Jessna',age:21,city:'tvm'},
{name:'Nikhil',age:27,city:'tvm'},
{name:'Akhil',age:23,city:'tvm'},
{name:'Alen',age:26,city:'tvm'},
]

  }

}
