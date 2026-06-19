import { Conversation } from "./Conversation";
import { Message } from "./Message";

export class ConversationManager {
  private conversation: Conversation = {
    messages: [],
  };

  getConversation(): Conversation {
    return this.conversation;
  }

  addMessage(message: Message): void {
    this.conversation.messages.push(message);
  }

  clear(): void {
    this.conversation.messages = [];
  }

  hasMessages(): boolean {
    return this.conversation.messages.length > 0;
  }
}