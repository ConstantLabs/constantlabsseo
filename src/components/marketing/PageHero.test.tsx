import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { PageHero } from "./PageHero";

function LocalizedCaseStudiesHero() {
  const { t } = useLanguage();

  return <PageHero eyebrow={t("inner.caseStudies.eyebrow")} title={t("inner.caseStudies.title")} lede={t("inner.caseStudies.lede")} />;
}

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

  it("uses paired Arabic copy for shared inner-page hero additions", () => {
    const keys = [
      "inner.caseStudies.eyebrow",
      "inner.caseStudies.title",
      "inner.caseStudies.lede",
      "inner.pricing.title",
      "inner.pricing.lede",
      "inner.blog.title",
      "inner.blog.lede",
      "inner.notFound.title",
      "inner.notFound.lede",
      "inner.notFound.backHome",
      "inner.about.titleLead",
      "inner.about.titleTail",
      "inner.about.lede",
      "inner.contact.lede",
      "inner.caseStudyDetail.all",
      "inner.blogPost.by",
    ];

    localStorage.setItem("cl-lang", "ar");
    render(
      <LanguageProvider>
        <LocalizedCaseStudiesHero />
      </LanguageProvider>,
    );

    expect(screen.getByRole("heading", { level: 1, name: "أعمال SEO موثقة" })).toBeVisible();
    for (const key of keys) {
      expect(translations[key]?.en).toBeTruthy();
      expect(translations[key]?.ar).toBeTruthy();
    }
  });
});
