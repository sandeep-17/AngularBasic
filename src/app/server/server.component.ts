import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  isDisabled = true;
  serverName = '';
  displayName = '';
  server = '';

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();

  @ViewChild('serverNameInput') serverElement: ElementRef;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.isDisabled = false; }, 4000);
  }

  addServer() {
    this.server = this.serverElement.nativeElement.value;
    // this.displayName=serverNameInput.value;

    this.serverCreated.emit({name: this.serverName, content: 'This is dev'});


  }




updateServer(event: any) {
  // this.serverName=(<HTMLInputElement>event.target).value;
  // if(this.serverName==''){
  //   this.isDisabled=true;
  // }else{
  //   this.isDisabled=false;
  // }
}

}
