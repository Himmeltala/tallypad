import * as DatesModule from "./dates";
import * as FormsModule from "./forms";
import * as ObjectsModule from "./objects";

export namespace Utils {
  export const Dates: typeof DatesModule = DatesModule;
  export const Forms: typeof FormsModule = FormsModule;
  export const Objects: typeof ObjectsModule = ObjectsModule;

  export function deleteAndReturnNext(arr: any[], curr: any) {
    const index = arr.indexOf(curr);
    if (index !== -1) {
      if (arr.length === 1) {
        return null;
      }
      arr.splice(index, 1);
      if (index === arr.length) {
        return arr[0];
      } else {
        return arr[index];
      }
    } else {
      return null;
    }
  }

  export const createFilter = (target: any) => {
    return (source: any) => {
      return source.value.includes(target);
    };
  };

  export function formatNumberWithUnits(num: number) {
    const units = ["K", "M", "B", "T"];
    let unitIndex = -1;
    let value = num;

    while (value >= 1000 && unitIndex < units.length - 1) {
      value /= 1000;
      unitIndex++;
    }

    value = Math.round(value * 1000) / 1000;

    if (unitIndex === -1) {
      return num.toString();
    } else {
      return value + units[unitIndex];
    }
  }

}
