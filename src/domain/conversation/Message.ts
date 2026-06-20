import { MessageId } from "./MessageId";
import { Sender } from "./Sender";

export interface Message {
  id: MessageId;
  sender: Sender;
  text: string;
}