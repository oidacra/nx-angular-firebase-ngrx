import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

export class AvailableValidators {
  constructor(private http: HttpClient) {}
  static available(item: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value?.toLowerCase() === item
        ? null
        : { wrongColor: control.value };
  }
  public requestCount(text): Observable<Object> {
    return this.http.get(
      `https://api.datamuse.com/words?sp=${text}&md=s`
    ) as Observable<Object>;
  }
}
