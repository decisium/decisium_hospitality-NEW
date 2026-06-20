import { ConversationManager } from "./ConversationManager";
import { OwnershipManager } from "./OwnershipManager";
import { ConversationLifecycleManager } from "./ConversationLifecycleManager";
import { MessageDeliveryManager } from "./MessageDeliveryManager";
import { MessageReadManager } from "./MessageReadManager";

export class ConversationAggregate {
  private readonly conversationManager =
    new ConversationManager();

  private readonly ownershipManager =
    new OwnershipManager();

  private readonly lifecycleManager =
    new ConversationLifecycleManager();

  private readonly deliveryManager =
    new MessageDeliveryManager();

  private readonly readManager =
    new MessageReadManager();

  hasMessages(): boolean {
    return this.conversationManager.hasMessages();
  }

  isLocked(): boolean {
    return this.ownershipManager.isLocked();
  }

  isActive(): boolean {
    return this.lifecycleManager.isActive();
  }

  isDelivered(): boolean {
    return this.deliveryManager.isDelivered();
  }

  isRead(): boolean {
    return this.readManager.isRead();
  }

  startConversation(): void {
    this.lifecycleManager.start();
  }
  endConversation(): void {
  this.lifecycleManager.end();
}
deliverMessage(): void {
  this.deliveryManager.deliver();
}
markMessageAsRead(): void {
  this.readManager.markAsRead();
}
acquireOwnership(): boolean {
  return this.ownershipManager.acquire();
}
releaseOwnership(): void {
  this.ownershipManager.release();
}
canDeliverMessage(): boolean {
  return this.isActive() && this.isLocked();
}
canReadMessage(): boolean {
  return this.isDelivered();
}
canCloseConversation(): boolean {
  return this.isActive();
}
canAcquireOwnership(): boolean {
  return !this.isLocked();
}
}