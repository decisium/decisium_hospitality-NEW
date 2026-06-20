import { DomainEvent } from "@/domain/events/DomainEvent";

export class ApplicationEventCollector {
  private readonly events: DomainEvent[] = [];

  collect(event: DomainEvent): void {
    this.events.push(event);
  }

  getEvents(): DomainEvent[] {
    return this.events;
  }
 clear(): void {
  this.events.length = 0;
} 
hasEvents(): boolean {
  return this.events.length > 0;
}
count(): number {
  return this.events.length;
}
}