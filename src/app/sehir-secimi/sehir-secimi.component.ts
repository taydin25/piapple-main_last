import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sehir-secimi',
  templateUrl: './sehir-secimi.component.html',
  styleUrls: ['./sehir-secimi.component.scss']
})
export class SehirSecimiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
