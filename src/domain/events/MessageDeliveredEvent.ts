import { DomainEvent } from "./DomainEvent";

export class MessageDeliveredEvent
  implements DomainEvent
{
  name = "MessageDelivered";
}