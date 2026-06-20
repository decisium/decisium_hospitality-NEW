import { DomainEvent } from "./DomainEvent";

export class ConversationEndedEvent
  implements DomainEvent
{
  name = "ConversationEnded";
}