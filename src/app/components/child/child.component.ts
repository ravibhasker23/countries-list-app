import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'feature-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input()
  country: any;

  @Output()
  countryClick = new EventEmitter<string>();

  onClick(): void {
    this.countryClick.emit(this.country.code);
  }
}
