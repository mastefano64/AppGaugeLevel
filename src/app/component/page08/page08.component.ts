import { Component, ViewChild, OnInit, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AppMaterialModule } from '../../app-material.module';
import { MatSelectChange } from '@angular/material/select';

import { GaugeLevelComponent } from '../../gauge-level/gauge-level/gauge-level.component';
import { GaugeLevelOptions } from '../../gauge-level/_model/gauge-level-options';
import { ManagerGaugeLevelService } from '../../service/manager-gauge-level.service';
import { GaugeStepArg } from '../../gauge-level/_model/gauge-step-arg';

@Component({
    selector: 'app-page08',
    templateUrl: './page08.component.html',
    styleUrls: ['./page08.component.scss'],
    standalone: true,
    imports: [
      FormsModule,
      AppMaterialModule,
      GaugeLevelComponent
    ],
    providers: [
      ManagerGaugeLevelService
    ]
})
export class Page08Component implements OnInit, OnDestroy {
  @ViewChild('gauge1') gauge1: GaugeLevelComponent;
  @ViewChild('gauge2') gauge2: GaugeLevelComponent;
  options1: GaugeLevelOptions;
  options2: GaugeLevelOptions;
  valueLevel = signal<number>(undefined);
  selectednumberstep = '0'
  step1: GaugeStepArg;
  step2: GaugeStepArg;
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
    // this.options1.numberStep = 10; // 15;
    // this.options1.alertLevelStepOrange = 4;
    // this.options1.alertLevelStepRed = 2;
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

  onSelectedNumberStep(event: MatSelectChange): void {
    const value = event.value;
    if (value === 'step1') {
      this.options1.numberStep = 10;
      this.options1.alertLevelStepOrange = 4;
      this.options1.alertLevelStepRed = 2;
      this.options2.numberStep = 10;
      this.options2.alertLevelStepOrange = 4;
      this.options2.alertLevelStepRed = 2;
    }
    if (value === 'step2') {
      this.options1.numberStep = 15;
      this.options1.alertLevelStepOrange = 6;
      this.options1.alertLevelStepRed = 3;
      this.options2.numberStep = 15;
      this.options2.alertLevelStepOrange = 6;
      this.options2.alertLevelStepRed = 3;
    }
    this.gauge1.redraw(); this.gauge2.redraw();
    this.service.startManagerGaugeLevel(50, 200);
  }

  onStepValueProgress1(step: GaugeStepArg): void {
    this.step1 = step;
    // console.log('onStepValueProgress1');
    // console.log(step);
  }

  onStepValueProgress2(step: GaugeStepArg): void {
    this.step1 = step;
    // console.log('onStepValueProgress2');
    // console.log(step);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
