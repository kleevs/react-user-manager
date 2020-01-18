import * as numeral from 'numeral';

export class ToolService {
    toDateString(date: Date) {
        if (date && date instanceof Date) {
            var day = numeral(date.getDay()).format("00");
            var month = numeral(date.getMonth()+1).format("00");
            var year = numeral(date.getFullYear()).format("00");
            return `${day}/${month}/${year}`;
        }
        return '';
    }

    parseDate(str: string) {
        var [date, month, year] = str.split("/");
        if (+date && +month && +year && year.length === 4) {
            return new Date(+year, +month-1, +date);
        }
        return null;
    }

    preventDefault(e, callback: () => void) {
        e.preventDefault();
        callback();
    }

    stopPropagation(e, callback: () => void) {
        e.stopPropagation();
        callback();
    }
}