import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedStatus = 'no server created till now';
  serverName = 'Ankit Raj';
  serverCreated = false;
  servers = ['TestServer,TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = 'Server is created';
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
