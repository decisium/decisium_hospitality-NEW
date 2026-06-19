import { Event } from "../events/Event";
import { State } from "./State";

export const TRANSITIONS: Record<State, Partial<Record<Event, State>>> = {
  [State.LOGIN_SCREEN]: {
    [Event.LOGIN_SUCCESS]: State.AVAILABLE,
  },

  [State.AVAILABLE]: {
    [Event.GUEST_ACQUIRED_LOCK]: State.GUEST_CONNECTED,
    [Event.HOST_CLOSE_RECEPTION]: State.RECEPTION_CLOSED,
    [Event.LOGOUT]: State.LOGIN_SCREEN,
  },

  [State.GUEST_CONNECTED]: {
    [Event.HOST_END_CONVERSATION]: State.AVAILABLE,
    [Event.GUEST_END_CONVERSATION]: State.AVAILABLE,

    [Event.HOST_REFRESH]: State.AVAILABLE,
    [Event.GUEST_REFRESH]: State.AVAILABLE,

    [Event.HOST_BROWSER_CLOSE]: State.AVAILABLE,
    [Event.GUEST_BROWSER_CLOSE]: State.AVAILABLE,

    [Event.HOST_CONNECTION_LOSS]: State.AVAILABLE,
    [Event.GUEST_CONNECTION_LOSS]: State.AVAILABLE,

    [Event.TIMEOUT]: State.AVAILABLE,
    [Event.MAX_DURATION]: State.AVAILABLE,

    [Event.NEW_LOGIN_CONTINUE]: State.AVAILABLE,

    [Event.HOST_CLOSE_RECEPTION]: State.RECEPTION_CLOSED,

    [Event.LOGOUT]: State.LOGIN_SCREEN,
  },

  [State.RECEPTION_CLOSED]: {
    [Event.OPEN_RECEPTION]: State.AVAILABLE,
    [Event.LOGOUT]: State.LOGIN_SCREEN,
  },
};