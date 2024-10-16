import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppMaterialModule } from '../../app-material.module';

import { GaugeLevelComponent } from '../../gauge-level/gauge-level/gauge-level.component';
import { GaugeLevelOptions } from '../../gauge-level/_model/gauge-level-options';
import { ManagerGaugeLevelService } from '../../service/manager-gauge-level.service';

@Component({
    selector: 'app-page03',
    templateUrl: './page03.component.html',
    styleUrls: ['./page03.component.scss'],
    standalone: true,
    imports: [
      AppMaterialModule,
      GaugeLevelComponent
    ],
    providers: [
      ManagerGaugeLevelService
    ]
})
export class Page03Component implements OnInit, OnDestroy {
  options1: GaugeLevelOptions;
  options2: GaugeLevelOptions;
  valueLevel = signal<number>(undefined);
  sub: Subscription;

  constructor(private service: ManagerGaugeLevelService) { }

  ngOnInit(): void {
    this.options1 = new GaugeLevelOptions();
    this.options1.gaugeType = 'horizontal-step';
    this.options1.defaultLevelColor = '#0000ff';
    //this.options1.defaultBackgroundLevelColor = '#777777';
    //this.options1.showStepProgressAlert = false;
    this.options1.numberStep = 15;
    this.options1.minValue = 1;
    this.options1.maxValue = 150;
    // this.options1.minValue = 50;
    // this.options1.maxValue = 200;

    this.options2 = new GaugeLevelOptions();
    this.options2.gaugeType = 'vertical-step';
    this.options2.defaultLevelColor = '#0000ff';
    //this.options2.defaultBackgroundLevelColor = '#777777';
    //this.options2.showStepProgressAlert = false;
    this.options2.numberStep = 10; // 15;
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
