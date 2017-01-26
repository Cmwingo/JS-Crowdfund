import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';


@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {

  transform(input: Project[], desiredCompleteness) {
    var output: Project[] = [];

    if (input==null) {
      return input;
    } else if(desiredCompleteness === "closeProjects") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goalFund < 1500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "farProjects") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goalFund >= 1500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
