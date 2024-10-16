export class GaugeLinearArg {
  id: number;
  value: number;
  progress: number;
  type: number;

  static createGaugeLinearArg(value: number, progress: number): GaugeLinearArg {
    const arg = new GaugeLinearArg();
    arg.value = value;
    arg.progress = progress;
    return arg;
  }
};
