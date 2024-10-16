import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppMaterialModule } from '../../app-material.module';

import { GaugeLevelComponent } from '../../gauge-level/gauge-level/gauge-level.component';
import { GaugeLevelOptions } from '../../gauge-level/_model/gauge-level-options';
import { ManagerGaugeLevelService } from '../../service/manager-gauge-level.service';

@Component({
    selector: 'app-page02',
    templateUrl: './page02.component.html',
    styleUrls: ['./page02.component.scss'],
    standalone: true,
    imports: [
      AppMaterialModule,
      GaugeLevelComponent
    ],
    providers: [
      ManagerGaugeLevelService
    ]
})
export class Page02Component implements OnInit, OnDestroy {
  options1: GaugeLevelOptions;
  options2: GaugeLevelOptions;
  valueLevel = signal<number>(undefined);
  sub: Subscription;

  constructor(private service: ManagerGaugeLevelService) { }

  ngOnInit(): void {
    this.options1 = new GaugeLevelOptions();
    this.options1.gaugeType = 'horizontal-linear';
    this.options1.showLinearProgressAlert = true;
    this.options1.minValue = 1;
    this.options1.maxValue = 150;
    // this.options1.minValue = 50;
    // this.options1.maxValue = 200;

    this.options2 = new GaugeLevelOptions();
    this.options2.gaugeType = 'vertical-linear';
    this.options2.showLinearProgressAlert = true;
    this.options2.minValue = 1;
    this.options2.maxValue = 150;
    // this.options2.minValue = 50;
    // this.options2.maxValue = 200;

    this.sub = this.service.pointSubjectAsync.subscribe(value => {
      this.valueLevel.set(value);
    });
    this.service.startManagerGaugeLevel(1, 150);
    //this.service.startManagerGaugeLevel(50, 200);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
