import moment from 'moment'

export default class Clock {
  nowTime() {
    return moment().format('YYYY-MM-DD'); 
  }
}
