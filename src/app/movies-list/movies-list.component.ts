import { Component, OnInit } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public ActionResult index()
  {
    return View();
  }

  constructor() { }

  ngOnInit() {
  }

}
