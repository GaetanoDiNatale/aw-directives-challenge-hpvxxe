import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date, withoutSuffix?: boolean): string {
    return moment(value).fromNow(withoutSuffix);
  }

}