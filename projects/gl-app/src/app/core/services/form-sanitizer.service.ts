import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FormSanitizerService {
  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  sanitizeValue(value: string): string {
    let _value = (value || '').toString();
    let decodedValue, sanitizedValue = '';

    while (_value !== decodedValue) {
      decodedValue = _value;
      _value = this.convertToHtml(_value);
    }

    while (_value !== sanitizedValue) {
      sanitizedValue = _value;
      _value = this._sanitizer.sanitize(SecurityContext.HTML, _value) || '';
    }

    if (this.hasChanges(value, _value)) {
      // TODO::Notify user that the input has restricted content
    }

    return this.convertToHtml(_value);
  }

  private convertToHtml(value: string): string {
    return new DOMParser().parseFromString(value, 'text/html').documentElement.textContent || '';
  }

  private hasChanges(originalValue: string, sanitizedValue: string): boolean {
    return originalValue.trim() !== this.convertToHtml(sanitizedValue);
  }
}
