import { Event } from "@/domain/events/Event";
import { nextState } from "@/domain/state/StateMachine";
import { State } from "@/domain/state/State";

describe("StateMachine", () => {
  it("LOGIN_SCREEN + LOGIN_SUCCESS → AVAILABLE", () => {
    expect(
      nextState(State.LOGIN_SCREEN, Event.LOGIN_SUCCESS)
    ).toBe(State.AVAILABLE);
  });

  it("AVAILABLE + GUEST_ACQUIRED_LOCK → GUEST_CONNECTED", () => {
    expect(
      nextState(State.AVAILABLE, Event.GUEST_ACQUIRED_LOCK)
    ).toBe(State.GUEST_CONNECTED);
  });

  it("AVAILABLE + HOST_CLOSE_RECEPTION → RECEPTION_CLOSED", () => {
    expect(
      nextState(State.AVAILABLE, Event.HOST_CLOSE_RECEPTION)
    ).toBe(State.RECEPTION_CLOSED);
  });

  it("RECEPTION_CLOSED + OPEN_RECEPTION → AVAILABLE", () => {
    expect(
      nextState(State.RECEPTION_CLOSED, Event.OPEN_RECEPTION)
    ).toBe(State.AVAILABLE);
  });

  it("throws on invalid transition", () => {
    expect(() =>
      nextState(
        State.LOGIN_SCREEN,
        Event.GUEST_ACQUIRED_LOCK
      )
    ).toThrow();
  });
});