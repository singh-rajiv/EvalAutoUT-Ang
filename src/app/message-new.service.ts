import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageNewService {

  add(message: string, messages: string[]): number {
    return messages.push(message);
  }

  get(i: number, messages: string[]): string {
    return messages[i];
  }

  clear(messages: string[]): number {
    messages = [];
    return 0;
  }
}
