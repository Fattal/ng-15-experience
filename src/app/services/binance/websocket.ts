import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WebSocketConnection {
  private webSocketConnection!: WebSocketSubject<any>;

  public connect(address: string): WebSocketSubject<any> {
    if (!this.webSocketConnection) {
      this.webSocketConnection = webSocket(address);
    }
    return this.webSocketConnection;
  }

  public sendMessage<T>(message: T): void {
    if  (this.webSocketConnection) {
      this.webSocketConnection.next(message);
    }
  }
}
