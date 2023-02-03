import { Injectable } from '@angular/core';
import { shareReplay, Subject } from 'rxjs';
import { WebSocketConnection } from './websocket';

export enum BitmexConnectionCommand {
  Subscribe = 'subscribe',
  Unsubscribe = 'unsubscribe'
}

export enum BitmexDataType {
  Default = 'trade',
  Trade = 'trade',
  OrderBook = 'orderBookL2_25',
  // todo other
}

export enum BitmexCurrency {
  Default = 'XBTUSD',
  XBTUSD = 'XBTUSD',
  // todo other
}

export interface BitMexChangeStreamMessage {
  op: BitmexConnectionCommand;
  args: string[];
}

@Injectable({ providedIn: 'root' })
export class BitmexService {

  private readonly CONNECTION_ADDRESS = 'wss://ws.bitmex.com/realtime';
  private data$ = new Subject<any>();
  public messages$ = this.data$.asObservable().pipe(shareReplay(1));

  constructor(
    private webSocket: WebSocketConnection,
  ) {
    this.runConnection();
  }

  public runConnection() {
    const url = this.CONNECTION_ADDRESS + `?subscribe=${ BitmexDataType.Default }`;
    this.webSocket.connect(url).subscribe(
      (message) => this.data$.next(message)
    );
  }

  public getOrderBooks() {
    const xbtDataType = `${ BitmexDataType.OrderBook }:${ BitmexCurrency.XBTUSD }`;
    this.setData({ op: BitmexConnectionCommand.Subscribe, args: [xbtDataType] });
  }

  private setData(data: BitMexChangeStreamMessage) {
    this.webSocket.sendMessage<BitMexChangeStreamMessage>(data);
  }
}
