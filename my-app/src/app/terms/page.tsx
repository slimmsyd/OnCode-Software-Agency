import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/app/components/redesign/LegalPage";
import { buildOpenGraph } from "@/app/lib/seo";

const PAGE_URL = "https://www.0ncode.com/terms";
const CONTACT_EMAIL = "oncodesoftware@gmail.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of 0ncode.com and OnCode Software Agency services, including its social posting tool.",
  alternates: { canonical: PAGE_URL },
  openGraph: buildOpenGraph({
    url: PAGE_URL,
    title: "Terms of Service | OnCode",
    description:
      "The terms that govern use of 0ncode.com and OnCode Software Agency services.",
  }),
};

const sections: LegalSection[] = [
  {
    heading: "Agreement to these terms",
    body: (
      <p>
        These Terms of Service govern your use of 0ncode.com and the services
        and software tools provided by OnCode Software Agency
        (&ldquo;OnCode,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), owned and
        operated by Sydney Sanders. By using the site or our services, you
        agree to these terms. If you do not agree, do not use them.
      </p>
    ),
  },
  {
    heading: "Use of the site and services",
    body: (
      <>
        <p>
          You may use the site to learn about OnCode, read our resources, and
          contact us. Client projects are governed by these terms together
          with any separate proposal, statement of work, or agreement we sign
          with you. If they conflict, the signed agreement controls.
        </p>
        <p>
          You agree to provide accurate information when you contact us or
          use our forms, and not to misuse the site, interfere with its
          operation, or attempt to access it in unauthorized ways.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        The site and its content, including text, graphics, logos, video, and
        code, are owned by OnCode or its licensors and protected by
        intellectual property laws. You may not copy, modify, or distribute
        site content without our written permission, except for personal,
        non-commercial viewing. Ownership of work we build for clients is set
        out in the client&rsquo;s agreement.
      </p>
    ),
  },
  {
    heading: "Social posting tool",
    body: (
      <>
        <p>
          OnCode operates a social posting tool that publishes approved video
          content to TikTok, Instagram, and YouTube through their official
          APIs. Anyone who connects an account to the tool agrees to:
        </p>
        <ul>
          <li>
            Connect only accounts they own or are authorized to manage, and
            post only content they have the rights to publish.
          </li>
          <li>
            Comply with the TikTok Terms of Service and Community Guidelines,
            Meta&rsquo;s and Instagram&rsquo;s Terms of Use and Community
            Guidelines, and the YouTube Terms of Service and Community
            Guidelines.
          </li>
          <li>
            Not use the tool for spam, impersonation, misleading content,
            infringing material, or any unlawful purpose.
          </li>
        </ul>
        <p>
          The tool posts only content the account owner has approved. We may
          suspend the tool or any connection that violates these terms or a
          platform&rsquo;s rules. Each platform may change or limit its API at
          any time, and we are not responsible for those changes.
        </p>
      </>
    ),
  },
  {
    heading: "Privacy",
    body: (
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we
        collect and use information, including platform access tokens used by
        the posting tool.
      </p>
    ),
  },
  {
    heading: "Disclaimers",
    body: (
      <p>
        The site and services are provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, express or implied,
        including warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not guarantee that the site or
        tools will be uninterrupted, error-free, or that any post will reach a
        particular audience or result.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, OnCode and Sydney Sanders will
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, data, or goodwill, arising
        from your use of the site or services. Our total liability for any
        claim relating to the site or services will not exceed the amount you
        paid us for the service giving rise to the claim in the twelve months
        before it arose, or one hundred US dollars if you paid nothing.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of Maryland, without
        regard to its conflict of law rules. Any dispute will be resolved in
        the state or federal courts located in Maryland, and you consent to
        their jurisdiction.
      </p>
    ),
  },
  {
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. When we do, we will post
        the new version on this page and update the effective date above.
        Continuing to use the site or services after a change means you accept
        the updated terms.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or reach us
        through our <Link href="/contact">contact page</Link>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="November 16, 2026"
      intro={
        <p>
          Please read these terms carefully before using 0ncode.com or any
          OnCode Software Agency service.
        </p>
      }
      sections={sections}
    />
  );
}
