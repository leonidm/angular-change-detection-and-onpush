import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  VERSION
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ar = [2, 2, 2];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.change();
      this.cd.markForCheck();
    }, 1000);
  }

  add(n) {
    this.ar.push(n);
  }

  change() {
    this.ar[2] = 7;
    console.log(this.ar);
  }
}
