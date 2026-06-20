import { Conversation } from "./Conversation";
import { ConversationStatus } from "./ConversationStatus";

export interface ConversationSnapshot {
  conversation: Conversation;
  status: ConversationStatus;
}