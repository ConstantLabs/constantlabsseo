import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ZCalBookingSection } from "./ZCalBookingSection";

describe("ZCalBookingSection", () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("keeps direct contact paths visible while the calendar loads", () => {
    render(
      <LanguageProvider>
        <ZCalBookingSection />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Book Free Consultation" }));

    expect(screen.getByTitle("Book a consultation with ConstantSEO")).toBeVisible();
    expect(screen.getByRole("status")).toHaveTextContent("Loading booking calendar");
    expect(screen.getByRole("link", { name: "Or chat on WhatsApp" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Or email us" })).toBeVisible();
  });

  it("shows a localized fallback when the calendar times out", () => {
    vi.useFakeTimers();
    render(
      <LanguageProvider>
        <ZCalBookingSection />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Book Free Consultation" }));
    act(() => vi.advanceTimersByTime(10_000));

    expect(screen.getByRole("alert")).toHaveTextContent("Unable to load the booking widget");
    expect(screen.getByRole("link", { name: "Or chat on WhatsApp" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Or email us" })).toBeVisible();
  });
});
