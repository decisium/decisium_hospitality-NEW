import { DomainEvent } from "@/domain/events/DomainEvent";

export class ApplicationEventProcessor {
  process(events: DomainEvent[]): void {
  for (const event of events) {
    this.processOne(event);
  }
}
  processOne(event: DomainEvent): void {
}
hasEvents(events: DomainEvent[]): boolean {
  return events.length > 0;
}
count(events: DomainEvent[]): number {
  return events.length;
}
}