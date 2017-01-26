export class Project {
  public neededFund: number = 0;
  public currentFund: number = 0;
  constructor(public name: string, public summary: string, public goalFund: number, public rewards: string) { }
}
