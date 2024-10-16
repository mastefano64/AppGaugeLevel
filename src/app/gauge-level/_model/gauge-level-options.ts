export type TypeGauge = 'horizontal-linear' | 'horizontal-step' | 'vertical-linear' | 'vertical-step';

export type TypeThresholdStep = 'before' | 'after';

export class GaugeLevelOptions {
  gaugeType: TypeGauge = 'horizontal-linear';
  thresholdStep: TypeThresholdStep = 'before';
  minValue = 0; maxValue = 0;
  heightHorizontal = '50px';
  heightStepHorizontal = '50px';
  widthStepVertical = '100%';
  showProgressText? = true;
  showLinearProgressAlert? = false;
  showStepProgressAlert? = false;
  showAlertLevelOnStep? = false;
  showAlertLevelPercOnStep? = false;
  numberStep? = 10;
  alertLevelLinearOrange? = 40;
  alertLevelLinearRed? = 20;
  alertLevelStepOrange? = 4;
  alertLevelStepRed? = 2;
  alphaColor = '1A';
  defaultLevelColor = '#00ffff';
  defaultBackgroundLevelColor = '#e2e2e2';
  alertLevelGreenColor = '#008000';
  alertLevelOrangeColor = '#ffa500';
  alertLevelRedColor = '#ff0000';
  tooltipDisabled = true;
  classHorizontalProgressText = '';
  classVerticalProgressText = '';
};
