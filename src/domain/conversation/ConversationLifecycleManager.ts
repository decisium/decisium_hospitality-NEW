import { ConversationStatus } from "./ConversationStatus";

export class ConversationLifecycleManager {
  private status: ConversationStatus =
    ConversationStatus.EMPTY;

  getStatus(): ConversationStatus {
    return this.status;
  }

  start(): void {
    this.status = ConversationStatus.ACTIVE;
  }

  end(): void {
    this.status = ConversationStatus.ENDED;
  }

  reset(): void {
    this.status = ConversationStatus.EMPTY;
  }

  isActive(): boolean {
    return this.status === ConversationStatus.ACTIVE;
  }
}