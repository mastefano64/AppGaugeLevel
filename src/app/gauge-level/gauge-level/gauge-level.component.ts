import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

import { AppMaterialModule } from '../../app-material.module';

import { GaugeLevelOptions, TypeGauge } from '../_model/gauge-level-options';
import { GaugeStepLevel } from '../_model/gauge-step-level';
import { GaugeLinearArg } from '../_model/gauge-linear-arg';
import { GaugeStepArg } from '../_model/gauge-step-arg';

// formula semplice, normalizza tra 0 ed 1.
// const normalizedTemperature = (temperature - minTemperature) / (maxTemperature - minTemperature);

// function normalizzaPercentualeComplessa(x, a1, a2, b1, b2) {
//   const valoreNormalizzato = ((x - a1) / (a2 - a1)) * (b2 - b1) + b1;
//   const percentuale = ((valoreNormalizzato - b1) / (b2 - b1)) * 100;
//   return percentuale;
// }

@Component({
    selector: 'app-gauge-level',
    templateUrl: './gauge-level.component.html',
    styleUrls: ['./gauge-level.component.scss'],
    standalone: true,
    imports: [
      AppMaterialModule,
      NgClass, NgStyle
    ]
})
export class GaugeLevelComponent implements OnInit, OnDestroy {
  @Input() options: GaugeLevelOptions;
  @Output() linearvalueprogress = new EventEmitter<GaugeLinearArg>();
  @Output() stepvalueprogress = new EventEmitter<GaugeStepArg>();
  gaugeType = signal<TypeGauge>(undefined);
  heightHorizontal = signal<string>(undefined);
  heightStepHorizontal = signal<string>(undefined);
  widthStepVertical = signal<string>(undefined);
  valueProgress = signal<string>(undefined);
  colorProgressLinear = signal<string>(undefined);
  stepLevel = signal<GaugeStepLevel[]>([]);
  showAlertLevelPercOnStep = signal<boolean>(false);
  showProgressText = signal<boolean>(true);
  tooltipDisabled = signal<boolean>(true);

  isFirstDrawn = false;
  classHorizontalText = '';
  classVerticalText = '';
  minGaugeValue = 0;
  maxGaugeValue = 100;
  minValue = 0;
  maxValue = 0;
  linearRange1 = 0;
  linearRange2 = 0;
  linearRange3 = 0;
  linearRange4 = 0;
  stepRange1 = 0;
  stepRange2 = 0;
  stepRange3 = 0;
  stepRange4 = 0;

  @Input() set valueLevel(value: number) {
    this._valueLevel = value;
    if (this.isFirstDrawn === true) {
      this.setValueLevel(this._valueLevel);
    }
  }
  get valueLevel(): number {
    return this._valueLevel;
  }
  _valueLevel: number;

  constructor() { }

  ngOnInit(): void {
    this.calculeteDimension();
    this.isFirstDrawn = true;
  }

  redraw(): void {
    if (this.isFirstDrawn === true) {
      this.calculeteDimension();
    }
  }

  calculeteDimension(): void {
    const o = this.options;
    this.gaugeType.set(o.gaugeType);
    this.minValue = o.minValue;
    this.maxValue = o.maxValue;
    this.linearRange1 = 1;
    this.linearRange2 = this.options.alertLevelLinearRed;
    this.linearRange3 = this.options.alertLevelLinearOrange;
    this.linearRange4 = 100;
    this.stepRange1 = 1;
    this.stepRange2 = this.options.alertLevelStepRed;
    this.stepRange3 = this.options.alertLevelStepOrange;
    this.stepRange4 = this.options.numberStep;

    this.tooltipDisabled.set(o.tooltipDisabled);
    this.showProgressText.set(o.showProgressText);
    this.showAlertLevelPercOnStep.set(o.showAlertLevelPercOnStep);
    this.classHorizontalText = o.classHorizontalProgressText;
    this.classVerticalText = o.classVerticalProgressText;

    if (o.gaugeType === 'horizontal-linear') {
      this.heightHorizontal.set(o.heightHorizontal);
    }
    if (o.gaugeType === 'vertical-linear') {
      // ??????????????????????????????????????????
    }
    if (o.gaugeType === 'horizontal-step') {
      this.heightStepHorizontal.set(o.heightStepHorizontal);
      const liststep = [];
      for (let i = 1; i <= o.numberStep; i++) {
        const step = new GaugeStepLevel();
        step.stepProgressId = i;
        step.heightStep = o.heightStepHorizontal;
        step.currentColor = this.options.defaultBackgroundLevelColor;
        this.tryComputeAlertLevelOnStep(i, step);
        liststep.push(step);
      }
      this.stepLevel.set(liststep);
    }
    if (o.gaugeType === 'vertical-step') {
      this.widthStepVertical.set(o.widthStepVertical);
      const liststep = [];
      for (let i = o.numberStep; i > 0; i--) {
        const step = new GaugeStepLevel();
        step.stepProgressId = i;
        step.widthStep = o.widthStepVertical;
        step.currentColor = this.options.defaultBackgroundLevelColor;
        this.tryComputeAlertLevelOnStep(i, step);
        liststep.push(step);
      }
      this.stepLevel.set(liststep);
    }
  }

  tryComputeAlertLevelOnStep(index: number, step: GaugeStepLevel): void {
    const b1 = 0; const b2 = 100;
    const a1 = 0; const a2 = this.options.numberStep;
    const valnormalizzato = ((index - a1) / (a2 - a1)) * (b2 - b1) + b1;
    let perc = 0;
    if (this.options.numberStep === 10) {
      perc = Math.ceil(valnormalizzato / 10) * 10;
    } else {
      perc = Math.round(valnormalizzato);
    }
    step.levelStepPercValue = `${perc}%`;
    if (index >= this.stepRange1 && index <= this.stepRange2) {
      step.levelStepPercColor = this.options.alertLevelRedColor;
      if (this.options.showAlertLevelOnStep === true) {
        step.currentColor = this.applyAlphaColor(this.options.alertLevelRedColor);
      }
    }
    if (index > this.stepRange2 && index <= this.stepRange3) {
      step.levelStepPercColor = this.options.alertLevelOrangeColor;
      if (this.options.showAlertLevelOnStep === true) {
        step.currentColor = this.applyAlphaColor(this.options.alertLevelOrangeColor);
      }
    }
    if (index > this.stepRange3 && index <= this.stepRange4) {
      step.levelStepPercColor = this.options.alertLevelGreenColor;
      if (this.options.showAlertLevelOnStep === true) {
        step.currentColor = this.applyAlphaColor(this.options.alertLevelGreenColor);
      }
    }
  }

  setValueLevel(value: number): void {
    const a1 = this.minValue; const a2 = this.maxValue;
    const b1 = this.minGaugeValue; const b2 = this.maxGaugeValue;
    const valnormalizzato = ((value - a1) / (a2 - a1)) * (b2 - b1) + b1;
    let percprogress = ((valnormalizzato - b1) / (b2 - b1)) * 100;
    //percprogress = Math.round(percprogress);
    percprogress = Math.floor(percprogress);
    if (percprogress) {
      this.valueProgress.set(`${percprogress}%`);
      if (this.options.gaugeType === 'horizontal-linear' ||
          this.options.gaugeType === 'vertical-linear') {
        const color = this.computeLinearColor(value, percprogress);
        this.colorProgressLinear.set(color);
      }
      if (this.options.gaugeType === 'horizontal-step' ||
         this.options.gaugeType === 'vertical-step') {
        const color = this.computeStepLevel(value, percprogress);
      }
    }
    // console.log(this.valueProgress() + ' ' + this.stepProgress());
  }

  computeStepLevel(value: number, percprogress: number): void {
    const a1 = 0; const a2 = 100;
    const b1 = 0; const b2 = this.options.numberStep;
    const valnormalizzato = ((percprogress - a1) / (a2 - a1)) * (b2 - b1) + b1;
    //const step = Math.round(valnormalizzato);
    const step = this.options.thresholdStep === 'before' ? Math.ceil(valnormalizzato)
                           : Math.floor(valnormalizzato);
    if (step < 1)
      return;
    const list = this.stepLevel();
    for (const item of list) {
      if (step === item.stepProgressId) {
        const opacity = (item.stepProgressId > step) ? true : false;
        item.currentColor = this.applyAlphaColor(this.options.defaultLevelColor, opacity);
        const arg = GaugeStepArg.createGaugeStepArg(value, percprogress);
        if (this.options.showStepProgressAlert === true) {
          if (step >= this.stepRange1 && step <= this.stepRange2) {
            item.currentColor = this.applyAlphaColor(this.options.alertLevelRedColor, opacity);
            arg.type = 1;
          }
          if (step > this.stepRange2 && step <= this.stepRange3) {
            item.currentColor = this.applyAlphaColor(this.options.alertLevelOrangeColor, opacity);
            arg.type = 2;
          }
          if (step > this.stepRange3 && step <= this.stepRange4) {
            item.currentColor = this.applyAlphaColor(this.options.alertLevelGreenColor, opacity);
            arg.type = 3;
          }
        }
        this.stepvalueprogress.emit(arg);
      }
    }
    this.stepLevel.set([ ...list ]);
  }

  computeLinearColor(value: number, percprogress: number): string {
    let colorprogress = this.options.defaultLevelColor;
    const arg = GaugeLinearArg.createGaugeLinearArg(value, percprogress);
    if (this.options.showLinearProgressAlert === true) {
      if (percprogress >= this.linearRange1 && percprogress <= this.linearRange2) {
        colorprogress = this.options.alertLevelRedColor;
        arg.type = 1;
      }
      if (percprogress > this.linearRange2 && percprogress <= this.linearRange3) {
        colorprogress = this.options.alertLevelOrangeColor;
        arg.type = 2;
      }
      if (percprogress > this.linearRange3 && percprogress <= this.linearRange4) {
        colorprogress = this.options.alertLevelGreenColor;
        arg.type = 3;
      }
    }
    this.linearvalueprogress.emit(arg);
    return colorprogress;
  }

  applyAlphaColor(colorin: string, compute: boolean = true): string {
    const alpha = this.options.alphaColor;
    const colorou = (compute) ? `${colorin}${alpha}` : colorin;
    const a = colorou;
    return colorou;
  }

  ngOnDestroy(): void {

  }
}
