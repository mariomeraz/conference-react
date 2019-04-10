import moment from "moment";

const OUTPUT = 'LLL';
const INPUT = 'YYYY-MM-DD HH:mm:ss';

export default class DateUtils{
    static formatDate(date, inputFormat = INPUT, outputFormat = OUTPUT){
        let dateNewFormat = moment(date);
        if(inputFormat !== INPUT){
            dateNewFormat = moment(date, inputFormat);
        }

        if(outputFormat !== OUTPUT){
            return dateNewFormat.format(outputFormat)
        }else{
            return  dateNewFormat.format(OUTPUT)
        }

    }
}
