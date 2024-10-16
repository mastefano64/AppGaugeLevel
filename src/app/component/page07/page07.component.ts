import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppMaterialModule } from '../../app-material.module';

import { GaugeLevelComponent } from '../../gauge-level/gauge-level/gauge-level.component';
import { GaugeLevelOptions } from '../../gauge-level/_model/gauge-level-options';
import { ManagerGaugeLevelService } from '../../service/manager-gauge-level.service';

@Component({
    selector: 'app-page07',
    templateUrl: './page07.component.html',
    styleUrls: ['./page07.component.scss'],
    standalone: true,
    imports: [
      AppMaterialModule,
      GaugeLevelComponent
    ],
    providers: [
      ManagerGaugeLevelService
    ]
})
export class Page07Component implements OnInit, OnDestroy {
  options1: GaugeLevelOptions;
  options2: GaugeLevelOptions;
  valueLevel = signal<number>(undefined);
  sub: Subscription;

  constructor(private service: ManagerGaugeLevelService) { }

  ngOnInit(): void {
    this.options1 = new GaugeLevelOptions();
    this.options1.gaugeType = 'horizontal-step';
    this.options1.defaultLevelColor = '#14b8b8';
    this.options1.showAlertLevelPercOnStep = true;
    this.options1.showAlertLevelOnStep = true;
    //this.options1.classVerticalProgressText = 'gauge1Text';
    //this.options1.thresholdStep = 'after';
    this.options1.numberStep = 15;
    this.options1.alertLevelStepOrange = 6;
    this.options1.alertLevelStepRed = 3;
    // this.options2.numberStep = 10; // 15;
    // this.options2.alertLevelStepOrange = 4;
    // this.options2.alertLevelStepRed = 2;
    this.options1.minValue = 50;
    this.options1.maxValue = 200;

    this.options2 = new GaugeLevelOptions();
    this.options2.gaugeType = 'vertical-step';
    this.options2.defaultLevelColor = '#14b8b8';
    this.options2.showAlertLevelPercOnStep = true;
    this.options2.showAlertLevelOnStep = true;
    this.options2.classVerticalProgressText = 'gauge2Text';
    //this.options2.thresholdStep = 'after';
    // this.options2.numberStep = 15;
    // this.options2.alertLevelStepOrange = 6;
    // this.options2.alertLevelStepRed = 3;
    this.options2.numberStep = 10; // 15;
    this.options2.alertLevelStepOrange = 4;
    this.options2.alertLevelStepRed = 2;
    this.options2.minValue = 50;
    this.options2.maxValue = 200;

    this.sub = this.service.pointSubjectAsync.subscribe(value => {
      this.valueLevel.set(value);
    });
    this.service.startManagerGaugeLevel(50, 200);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
