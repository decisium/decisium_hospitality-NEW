import { ConversationLock } from "./ConversationLock";
import { ConversationOwner } from "./ConversationOwner";

export class OwnershipManager {
  private lock: ConversationLock = {
    owner: ConversationOwner.NONE,
  };

  getOwner(): ConversationOwner {
    return this.lock.owner;
  }

  isLocked(): boolean {
    return this.lock.owner !== ConversationOwner.NONE;
  }

  acquire(): boolean {
    if (this.isLocked()) {
      return false;
    }

    this.lock.owner = ConversationOwner.GUEST;

    return true;
  }

  release(): void {
    this.lock.owner = ConversationOwner.NONE;
  }
}