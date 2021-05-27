import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

const selector = 'ds-icon';

export const ICON_TYPES = [
  'checkCircle',
  'checkboxBlank',
  'checkboxChecked',
  'checkboxIndeterminate',
  'close',
  'error',
  'expandMore',
  'info',
  'loader',
  'place',
  'radioChecked',
  'radioUnchecked',
  'search',
  'visibility',
  'visibilityOff'
] as const;
export type IconType = typeof ICON_TYPES[number];

@Component({
  selector: selector,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsIconComponent {
  @Input() type!: IconType;

  @HostBinding('class')
  get classNames(): string {
    return `${selector} ${selector}--${this.type}`;
  }
}
