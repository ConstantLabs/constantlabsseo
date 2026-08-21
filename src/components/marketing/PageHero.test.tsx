import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageHero } from "./PageHero";

describe("PageHero", () => {
  it("renders the supplied eyebrow, semantic heading, and lede", () => {
    render(<PageHero eyebrow="Local search" title="SEO in Dubai" lede="Market coverage." />);

    expect(screen.getByRole("heading", { level: 1, name: "SEO in Dubai" })).toBeVisible();
    expect(screen.getByText("Local search")).toBeVisible();
    expect(screen.getByText("Market coverage.")).toBeVisible();
  });

  it("inherits direction from an RTL parent", () => {
    const { container } = render(
      <div dir="rtl">
        <PageHero eyebrow="البحث المحلي" title="تحسين محركات البحث في دبي" lede="تغطية السوق." />
      </div>,
    );

    expect(screen.getByRole("heading", { level: 1, name: "تحسين محركات البحث في دبي" })).toBeVisible();
    expect(container.querySelector("section")).not.toHaveAttribute("dir");
  });
});
