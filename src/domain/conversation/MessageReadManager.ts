import { MessageReadStatus } from "./MessageReadStatus";

export class MessageReadManager {
  private status: MessageReadStatus =
    MessageReadStatus.UNREAD;

  getStatus(): MessageReadStatus {
    return this.status;
  }

  markAsRead(): void {
    this.status = MessageReadStatus.READ;
  }

  reset(): void {
    this.status = MessageReadStatus.UNREAD;
  }

  isRead(): boolean {
    return this.status === MessageReadStatus.READ;
  }
}