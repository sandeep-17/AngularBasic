import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  templateUrl: './server-dashboard.component.html',
  styleUrls: ['./server-dashboard.component.css']
})
export class ServerDashboardComponent implements OnInit {

  @Input('svrElements') element: { type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
