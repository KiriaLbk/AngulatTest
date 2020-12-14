import { Component, OnInit } from '@angular/core';
import { StreamsService } from './../../services/streams/streams.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  stream;
  num = 0;
  arrs = {
    1: [],
    2: [],
    3: [],
  };

  constructor(private streamService: StreamsService) {}

  ngOnInit(): void {}

  startStream(): void {
    this.checkArrs();
    this.stream = this.streamService.getObs().subscribe({
      next: (val) => {
        this.num = this.streamService.getSum(val.id);
        this.arrs[val.stream].push(val.id);
      },
    });
    setTimeout(() => {
      this.stream.unsubscribe();
    }, 30000);
  }
  // do empty arrays
  checkArrs(): [] {
    this.num = 0;
    for (const index of Object.keys(this.arrs)) {
      this.arrs[index] = [];
    }
    return;
  }
}
