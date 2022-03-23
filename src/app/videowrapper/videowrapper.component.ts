import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'videowrapper',
  templateUrl: './videowrapper.component.html',
  styleUrls: ['./videowrapper.component.css'],
})
export class VideowrapperComponent {
  @ViewChild('sourceVid', { static: false }) sourceVid: ElementRef;
  @ViewChild('targetVid', { static: false }) targetVid: ElementRef;
  @ViewChild('targetCanvas', { static: false }) canvasRef: ElementRef =
    {} as ElementRef;

  @Output() captureStream = new EventEmitter<MediaStream>();

  originalSrc: string =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  targetSrc: string = '';
  context = null;

  constructor() {}

  ngAfterViewInit() {
    // child is set
    this.captureStream.emit(this.sourceVid.nativeElement.captureStream());
    //this.captureStream.emit('hello');
    // console.log('stream', stream);
    // this.targetVid.nativeElement.srcObject = stream;
    // this.sourceVid.nativeElement.play();
    // this.targetVid.nativeElement.play();
    // this.context = this.canvasRef.nativeElement.getContext('2d');
    // this.drawCanvas();
  }

  drawCanvas() {
    const vid = document.getElementById('sourceVid');
    // console.log('canvas', this.canvasRef);

    console.log('context', this.context);
    console.log('this.targetVid.nativeElement', this.targetVid.nativeElement);
    this.context.drawImage(vid, 0, 0, 240, 360);
    // this.context.restore();
    requestAnimationFrame(this.drawCanvas.bind(this));
  }
}
