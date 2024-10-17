## AppGaugeLevel

### Introduction

[LIVE DEMO](https://www.stefanomarchisio.it/AppGaugeLevel/index.html)<br>

This control provides a progressbar / level indicator. It is possible to set 4 modes of operation: 'horizontal-linear', 'horizontal-step', 'vertical-linear', 'vertical-step'. Horizontal linear or step bar. Vertical linear or step bar. I can set a range of input values ​​(e.g. 0-150, 50-200) via the 'minValue' and 'maxValue' properties. The bar displayed in the 4 modes will always have a scale that goes from 1 to 100 (percentage). By default 10 steps will be displayed, but I can also set an arbitrary number of steps via the 'numberStep' property.

<br>

You can set 2 optional 'alert' thresholds, so when the threshold is reached, the progress indicator will change color. If no thresholds are specified, the progress indicator will always have the default color. If a step bar has been chosen, you can also set the background color of the steps, with the color corresponding to the 3 areas delimited by the 'alert' thresholds. When reached, the background color will change from opaque to solid.

<br>

![AppGaugeLevel](/screenshot/image1.png)

![AppGaugeLevel](/screenshot/image2.png)

### GaugeLevelOptions

**gaugeType**: Type progressbar / indicatore di livello. (*'horizontal-linear', 'horizontal-step', 'vertical-linear', 'vertical-step'*).

**minValue**: Minimum input value (*number - required*).

**maxValue**: Maximum input value (*number - required*).

**heightHorizontal**: Linear horizontal bar height (*string - default '50px'*).

**heightStepHorizontal**: Vertical bar step height (*string - default '50px'*).

**widthStepVertical**: Vertical bar step width (*string - default '100%'*).

**numberStep**: In step mode, number of steps displayed (*number - default 10*).

**showProgressText**: Percentage progress indication in text. (*boolean - default: true*).

**showLinearProgressAlert**: Progress indication with alert, in linear mode (2 optional 'alert' thresholds can be set, so when the threshold is reached, the progress indicator will change color). (*boolean - default: false*).

**showStepProgressAlert**: Progress indication with alert, in step mode (You can set 2 optional 'alert' thresholds, this way when the threshold is reached, the progress indicator will change color). (*boolean - default: false*).

**showAlertLevelOnStep**: In step mode the color corresponding to the threshold is shown in the background. (*boolean - default: false*).

**showAlertLevelPercOnStep**: In step mode the corresponding progress percentage is shown (on the step). (*boolean - default: false*).

**thresholdStep**: Specifies whether the 'progress indicator' changes color when entering or exiting on step-range. (*'after', 'before' - default: 'before'*).

**alertLevelLinearOrange**: Specifies the value of the orange progress percentage - threshold. (2 optional 'alert' thresholds can be set, so that when the threshold is reached, the progress indicator will change color). (*number - default: 40*).

**alertLevelLinearRed**: Specifies the value of the red progress percentage - threshold. (2 optional 'alert' thresholds can be set, so when the threshold is reached, the progress indicator will change color). (*number - default: 20*).

**alertLevelStepOrange**: Specifies the number of the orange step - threshold. (You can set 2 optional 'alert' thresholds, so when the threshold is reached, the progress indicator will change color). (*number - default: 4*).

**alertLevelStepRed**: Specify the number of the orange step - threshold. (You can set 2 optional 'alert' thresholds, so when the threshold is reached, the progress indicator will change color). (*number - default: 2*).

**alphaColor**: If a step bar has been chosen, it is also possible to set the background color of the step, with the color corresponding to the 3 areas delimited by the 'alert' thresholds. When reached, the background color will change from opaque to full. The alphaColor property defines the alpha color of the opaque state. (*string - default: '1A'*).

**defaultLevelColor**: Default/foreground color of the progress bar. (*string - default: '#00ffff'*).

**defaultBackgroundLevelColor**: Default/background color of the progress bar. (*string - default: '#00ffff'*).

**alertLevelGreenColor**: Green alert color. (*string - default: '#008000'*).

**alertLevelOrangeColor**: Color orange alert. (*string - default: '#ffa500'*).

**alertLevelRedColor**: Red alert color. (*string - default: '#ff0000'*).

**tooltipDisabled**: Disable tooltip in step mode. (*boolean - default: true*).

**classHorizontalProgressText**: Classe css.

**classVerticalProgressText**: Classe css.

