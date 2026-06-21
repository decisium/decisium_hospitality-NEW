import { DomainEvent } from "@/domain/events/DomainEvent";

export class EventSubscriber {
  handle(events: DomainEvent[]): void {
  for (const event of events) {
    this.handleOne(event);
  }
}
  handleOne(event: DomainEvent): void {
}
hasEvents(events: DomainEvent[]): boolean {
  return events.length > 0;
}
count(events: DomainEvent[]): number {
  return events.length;
}
}