import { sendGAEvent } from "@next/third-parties/google";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function pagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

function emit(event: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;
  const payload = { page_path: pagePath(), ...params };
  const cleaned = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  ) as Record<string, string | number | boolean>;
  sendGAEvent("event", event, cleaned);
}

export function trackCtaClick(
  buttonName: string,
  params?: AnalyticsParams,
) {
  emit("cta_click", { button_name: buttonName, ...params });
}

export function trackOutboundClick(
  url: string,
  linkText?: string,
  params?: AnalyticsParams,
) {
  emit("outbound_click", {
    link_url: url,
    link_text: linkText,
    ...params,
  });
}

export function trackFormSubmit(formName: string, params?: AnalyticsParams) {
  emit("form_submit", { form_name: formName, ...params });
}

export function trackNavClick(destination: string, params?: AnalyticsParams) {
  emit("nav_click", { destination, ...params });
}