import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { NavComponent } from '../nav/nav.component';

// https://stackoverflow.com/questions/48535585/what-is-difference-between-justify-self-justify-items-and-justify-content-in-cs

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
      NavComponent
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
