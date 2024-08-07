import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { ChatService } from '../../services/chat.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  private stompClient: any;
  private CHANNEL = '/topic/chat';
  private ENDPOINT = 'http://localhost:8080/socket';

  isConnected = false;

  chatFormGroup: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.connectWebsocket();
  }

  private connectWebsocket() {
    let ws = new SockJS(this.ENDPOINT);
    this.stompClient = Stomp.over(ws);

    let that = this;

    this.stompClient.connect({}, function () {
      that.isConnected = true;
      that.subscribeToGlobalChat();
    });
  }

  private subscribeToGlobalChat() {
    this.stompClient.subscribe(this.CHANNEL, function (message: any) {
      console.log(message);
    });
  }

  onSubmit() {
    let message = this.chatFormGroup.controls;

    //is connected ?
    if (!this.isConnected) {
      alert('Please connect to websocket');
      return;
    }

    //validate message
    this.chatService.postMessage(message['message'].value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    //this.chatService.postMessage(message['message'].value).subscribe()
    //alert(message['message'].value);
  }
}
