import { MessageStatus } from "./MessageStatus";

export class MessageDeliveryManager {
  private status: MessageStatus =
    MessageStatus.CREATED;

  getStatus(): MessageStatus {
    return this.status;
  }

  deliver(): void {
    this.status = MessageStatus.DELIVERED;
  }

  reset(): void {
    this.status = MessageStatus.CREATED;
  }

  isDelivered(): boolean {
    return this.status === MessageStatus.DELIVERED;
  }
}