import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "cleanString" })
export class CleanStringPipe implements PipeTransform {
  transform(value: string): string {
    let newVal = value.replace(/[^\w\s]/gi, " ");
    return newVal.charAt(0).toUpperCase() + newVal.slice(1);
  }
}
