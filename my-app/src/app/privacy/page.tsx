import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/app/components/redesign/LegalPage";
import { buildOpenGraph } from "@/app/lib/seo";

const PAGE_URL = "https://www.0ncode.com/privacy";
const CONTACT_EMAIL = "oncodesoftware@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How OnCode Software Agency collects, uses, and protects information on 0ncode.com and in its social posting tool.",
  alternates: { canonical: PAGE_URL },
  openGraph: buildOpenGraph({
    url: PAGE_URL,
    title: "Privacy Policy | OnCode",
    description:
      "How OnCode Software Agency collects, uses, and protects information.",
  }),
};

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: (
      <p>
        OnCode Software Agency (&ldquo;OnCode,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) is owned and operated by Sydney Sanders. This policy
        covers the website at 0ncode.com and the software tools OnCode
        operates, including our social posting tool.
      </p>
    ),
  },
  {
    heading: "Information you give us",
    body: (
      <>
        <p>
          When you use our contact, project intake, audit booking, or
          newsletter forms, we collect the details you choose to submit, such
          as your name, email address, company, and a description of your
          project.
        </p>
        <p>
          We use this information only to reply to you, prepare proposals,
          deliver services you request, and send newsletters you subscribed
          to. You can unsubscribe from emails at any time.
        </p>
      </>
    ),
  },
  {
    heading: "Analytics and cookies",
    body: (
      <p>
        We use Google Analytics to understand how visitors use the site, such
        as which pages are viewed and how visitors arrive. Google Analytics
        uses cookies and similar technologies and collects information such as
        device type, browser, approximate location, and pages visited. We do
        not use this data to identify you personally. You can block or delete
        cookies in your browser settings, or use Google&rsquo;s opt-out
        browser add-on.
      </p>
    ),
  },
  {
    heading: "Our social posting tool",
    body: (
      <>
        <p>
          OnCode operates an internal social posting tool that connects to the
          TikTok, Instagram (Meta), and YouTube (Google) APIs. It is used to
          publish video content to accounts owned or managed by the account
          owner who authorized it.
        </p>
        <ul>
          <li>
            It only posts content that the account owner has reviewed and
            approved, and only to the account owner&rsquo;s own accounts.
          </li>
          <li>
            When the account owner connects an account, the platform issues
            OAuth access tokens. We store these tokens securely and use them
            only to publish approved content and read the basic account and
            post information needed to confirm that a post succeeded.
          </li>
          <li>
            The tool does not collect personal data from end users, viewers,
            followers, or commenters on any platform.
          </li>
          <li>
            We do not sell, share, or use platform data for advertising or any
            purpose other than publishing the owner&rsquo;s approved content.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Revoking access",
    body: (
      <>
        <p>
          You can revoke the posting tool&rsquo;s access at any time from each
          platform&rsquo;s settings:
        </p>
        <ul>
          <li>TikTok: Settings and privacy, Security, Apps and services permissions.</li>
          <li>Instagram and Facebook: Settings, Apps and websites, or Business Integrations.</li>
          <li>
            YouTube and Google: your Google Account, Security, Third-party apps
            with account access.
          </li>
        </ul>
        <p>
          Once access is revoked, the stored token stops working and we delete
          it.
        </p>
      </>
    ),
  },
  {
    heading: "How we share information",
    body: (
      <p>
        We do not sell your personal information. We share information only
        with service providers that help us run the site and our services,
        such as hosting, email, and analytics providers, and only as needed for
        them to do that work, or when required by law.
      </p>
    ),
  },
  {
    heading: "Data retention and deletion",
    body: (
      <p>
        We keep information only as long as needed for the purposes above. You
        can ask us to access, correct, or delete any information we hold about
        you, including stored platform tokens and posting records, by emailing{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will
        complete deletion requests within 30 days.
      </p>
    ),
  },
  {
    heading: "Security",
    body: (
      <p>
        We use reasonable technical and organizational safeguards, including
        encrypted connections and access-controlled credential storage, to
        protect information. No method of transmission or storage is
        completely secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    heading: "Children",
    body: (
      <p>
        Our site and services are not directed to children under 13, and we
        do not knowingly collect personal information from them.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. When we do, we will post
        the new version on this page and update the effective date above.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about this policy? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or reach us
        through our <Link href="/contact">contact page</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="November 16, 2026"
      intro={
        <p>
          This Privacy Policy explains what information OnCode Software Agency
          collects, how we use it, and the choices you have.
        </p>
      }
      sections={sections}
    />
  );
}
