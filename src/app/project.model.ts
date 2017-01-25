export class Project {
  public currentFund: number = 0;
  constructor(public name: string, public summary: string, public neededFund: number, public rewards: string) { }
}
