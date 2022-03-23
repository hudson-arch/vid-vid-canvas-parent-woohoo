import {
  Component,
  VERSION,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { VideowrapperComponent } from './videowrapper/videowrapper.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  originalSrc: string =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  targetSrc: string = '';
  context = null;

  @ViewChild('wrapper', { static: false }) vidWrapper: VideowrapperComponent;
  @ViewChild('targetVid', { static: false }) targetVid: ElementRef;
  @ViewChild('targetCanvas', { static: false }) canvasRef: ElementRef =
    {} as ElementRef;

  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit() {
    // child is set
    // const stream = this.sourceVid.nativeElement.captureStream();
    // console.log('stream', stream);
    // this.targetVid.nativeElement.srcObject = stream;
    // this.sourceVid.nativeElement.play();
    // this.targetVid.nativeElement.play();
    // this.context = this.canvasRef.nativeElement.getContext('2d');
    // this.drawCanvas();
  }

  drawCanvas() {
    const vid = document.getElementById('targetVid');
    // console.log('canvas', this.canvasRef);

    console.log('context', this.context);
    console.log('this.targetVid.nativeElement', this.targetVid.nativeElement);
    this.context.drawImage(
      this.vidWrapper.sourceVid.nativeElement,
      0,
      0,
      360,
      240
    );
    // this.context.restore();
    requestAnimationFrame(this.drawCanvas.bind(this));
  }

  outputStream(stream?: unknown) {
    console.log('stream', stream);
  }

  addItem(newItem?: MediaStream) {
    console.log('new item', newItem ? newItem : 'no item');
    this.targetVid.nativeElement.srcObject = newItem;
    this.targetVid.nativeElement.play();
    this.context = this.canvasRef.nativeElement.getContext('2d');
    this.drawCanvas();
  }
}
