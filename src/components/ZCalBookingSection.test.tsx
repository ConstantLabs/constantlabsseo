import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ZCalBookingSection } from "./ZCalBookingSection";

describe("ZCalBookingSection", () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it.each([
    ["en", "Discuss Your Project", "Or chat on WhatsApp", "Or email us"],
    ["ar", "ناقش مشروعك", "أو تواصل عبر واتساب", "أو راسلنا"],
  ])("offers a project enquiry and direct contact paths in %s", (lang, projectLabel, whatsappLabel, emailLabel) => {
    localStorage.setItem("cl-lang", lang);
    const { container } = render(
      <MemoryRouter>
        <LanguageProvider>
          <ZCalBookingSection />
        </LanguageProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: projectLabel })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: whatsappLabel })).toBeVisible();
    const email = screen.getByRole("link", { name: emailLabel });
    expect(email).toBeVisible();
    expect(decodeURIComponent(email.getAttribute("href")!)).toContain(lang === "ar" ? "استفسار عن مشروع SEO" : "SEO Project Enquiry");
    expect(container.querySelector("iframe")).toBeNull();
    expect(container).not.toHaveTextContent(/\bfree\b|مجان|no commitment/i);
  });
});
