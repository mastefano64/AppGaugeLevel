export class GaugeStepArg {
  value: number;
  progress: number;
  type: number;

  static createGaugeStepArg(value: number, progress: number): GaugeStepArg {
    const arg = new GaugeStepArg();
    arg.value = value;
    arg.progress = progress;
    return arg;
  }
};
