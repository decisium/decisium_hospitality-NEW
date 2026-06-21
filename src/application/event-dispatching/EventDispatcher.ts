import { DomainEvent } from "@/domain/events/DomainEvent";

export class EventDispatcher {
  dispatch(events: DomainEvent[]): void {
  for (const event of events) {
    this.dispatchOne(event);
  }
}
  dispatchOne(event: DomainEvent): void {
}
hasEvents(events: DomainEvent[]): boolean {
  return events.length > 0;
}
count(events: DomainEvent[]): number {
  return events.length;
}
}