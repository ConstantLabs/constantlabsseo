import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { SearchSignalField } from "./SearchSignalField";

describe("SearchSignalField", () => {
  it("presents the generated signal as a localized conceptual model", () => {
    localStorage.setItem("cl-lang", "ar");

    render(
      <LanguageProvider>
        <SearchSignalField />
      </LanguageProvider>,
    );

    expect(screen.getByText("نموذج مفاهيمي")).toBeVisible();
    expect(screen.getByRole("img", { name: "إشارات بحث متناثرة تنتظم في مسار صاعد" })).toBeVisible();
    expect(screen.queryByText(/Google Search Console/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/34\.2%/)).not.toBeInTheDocument();
  });
});
