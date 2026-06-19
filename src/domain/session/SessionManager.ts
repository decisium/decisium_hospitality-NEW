import { ActiveConversationSession } from "./ActiveConversationSession";

export class SessionManager {
  private activeSession?: ActiveConversationSession;

  getActiveSession(): ActiveConversationSession | undefined {
    return this.activeSession;
  }

  setActiveSession(
    session: ActiveConversationSession
  ): void {
    this.activeSession = session;
  }

  clearActiveSession(): void {
    this.activeSession = undefined;
  }

  hasActiveSession(): boolean {
    return this.activeSession !== undefined;
  }
}