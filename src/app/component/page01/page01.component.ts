import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppMaterialModule } from '../../app-material.module';

import { GaugeLevelComponent } from '../../gauge-level/gauge-level/gauge-level.component';
import { GaugeLevelOptions } from '../../gauge-level/_model/gauge-level-options';
import { ManagerGaugeLevelService } from '../../service/manager-gauge-level.service';
import { GaugeLinearArg } from '../../gauge-level/_model/gauge-linear-arg';

@Component({
    selector: 'app-page01',
    templateUrl: './page01.component.html',
    styleUrls: ['./page01.component.scss'],
    standalone: true,
    imports: [
      AppMaterialModule,
      GaugeLevelComponent
    ],
    providers: [
      ManagerGaugeLevelService
    ]
})
export class Page01Component implements OnInit, OnDestroy {
  options1: GaugeLevelOptions;
  options2: GaugeLevelOptions;
  valueLevel = signal<number>(undefined);
  linear1: GaugeLinearArg;
  linear2: GaugeLinearArg;
  sub: Subscription;

  constructor(private service: ManagerGaugeLevelService) { }

  ngOnInit(): void {
    this.options1 = new GaugeLevelOptions();
    this.options1.gaugeType = 'horizontal-linear';
    this.options1.defaultLevelColor = '#0000ff';
    //this.options1.showLinearProgressAlert = false;
    this.options1.showProgressText = false;
    this.options1.minValue = 1;
    this.options1.maxValue = 150;
    // this.options1.minValue = 50;
    // this.options1.maxValue = 200;

    this.options2 = new GaugeLevelOptions();
    this.options2.gaugeType = 'vertical-linear';
    this.options2.defaultLevelColor = '#0000ff';
    //this.options2.showLinearProgressAlert = false;
    this.options2.showProgressText = false;
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

  onLinearValueProgress1(linear: GaugeLinearArg): void {
    this.linear1 = linear;
    // console.log('onLinearValueProgress1');
    // console.log(step);
  }

  onLinearValueProgress2(linear: GaugeLinearArg): void {
    this.linear2 = linear;
    // console.log('onLinearValueProgress2');
    // console.log(step);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
