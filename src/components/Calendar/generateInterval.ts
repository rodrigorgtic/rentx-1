import { eachDayOfInterval, format } from 'date-fns';


import { MarkedDateProps, DayProps } from '.';
import { getPlatformDate } from '../../utils/getPlatformDate';
import theme from '../../global/styles/theme';

export function generateInterval(start: DayProps, end: DayProps){
    let interval : MarkedDateProps = {};

    const teste = eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
    console.log(teste);
}