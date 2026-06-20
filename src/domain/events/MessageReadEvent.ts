import { DomainEvent } from "./DomainEvent";

export class MessageReadEvent
  implements DomainEvent
{
  name = "MessageRead";
}