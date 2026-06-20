import { ConversationAggregate } from "@/domain/conversation/ConversationAggregate";
import { DomainEvent } from "@/domain/events/DomainEvent";
import { ApplicationEventCollector } from "./events/ApplicationEventCollector";
export class ConversationApplicationService {
  private readonly conversationAggregate =
    new ConversationAggregate();
  private readonly eventCollector =
  new ApplicationEventCollector();  
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
getEvents(): DomainEvent[] {
  return this.conversationAggregate.getEvents();
}
clearEvents(): void {
  this.conversationAggregate.clearEvents();
}
hasEvents(): boolean {
  return this.getEvents().length > 0;
}
countEvents(): number {
  return this.getEvents().length;
}
getApplicationEvents(): DomainEvent[] {
  return this.eventCollector.getEvents();
}
clearApplicationEvents(): void {
  this.eventCollector.clear();
}
}