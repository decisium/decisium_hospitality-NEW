import { DomainEvent } from "./DomainEvent";

export class ConversationStartedEvent
  implements DomainEvent
{
  name = "ConversationStarted";
}