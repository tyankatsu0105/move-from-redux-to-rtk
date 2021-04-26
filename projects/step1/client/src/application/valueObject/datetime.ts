import { format, parseISO } from "date-fns";
import ja from "date-fns/locale/ja";

export class DateTime {
  constructor(public dateTime: string) {}

  format(formatString: string) {
    const parsedISO = parseISO(this.dateTime);
    return format(parsedISO, formatString, { locale: ja });
  }
}
