import { DomainEvent } from "@/domain/events/DomainEvent";

export class ExternalEventPublisher {
  publish(events: DomainEvent[]): void {
  for (const event of events) {
    this.publishOne(event);
  }
}
  publishOne(event: DomainEvent): void {
}
hasEvents(events: DomainEvent[]): boolean {
  return events.length > 0;
}
count(events: DomainEvent[]): number {
  return events.length;
}
}