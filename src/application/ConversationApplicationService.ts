import { ConversationAggregate } from "@/domain/conversation/ConversationAggregate";

export class ConversationApplicationService {
  private readonly conversationAggregate =
    new ConversationAggregate();
 startConversation(): void {
  this.conversationAggregate.startConversation();
} 
endConversation(): void {
  this.conversationAggregate.endConversation();
} 
acquireOwnership(): boolean {
  return this.conversationAggregate.acquireOwnership();
} 
releaseOwnership(): void {
  this.conversationAggregate.releaseOwnership();
}
deliverMessage(): void {
  this.conversationAggregate.deliverMessage();
}
markMessageAsRead(): void {
  this.conversationAggregate.markMessageAsRead();
}
}