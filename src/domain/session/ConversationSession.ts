import { GuestSession } from "./GuestSession";
import { HostSession } from "./HostSession";

export interface ConversationSession {
  host: HostSession;
  guest: GuestSession;
}