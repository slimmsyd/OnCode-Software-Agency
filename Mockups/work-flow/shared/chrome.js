// Nav, footer, and the option switcher. Each page calls OC.chrome(...) once.

(function () {
  const SITE = "https://www.0ncode.com";

  const NAV_ITEMS = [
    { label: "The Audit", href: `${SITE}/#audit` },
    { label: "Services", href: `${SITE}/#services` },
    { label: "Work", href: "work.html", isWork: true },
    { label: "Resources", href: `${SITE}/resources` },
    { label: "Process", href: `${SITE}/#process` },
    { label: "Founder", href: `${SITE}/#founder` },
  ];

  window.OC.BOOK_URL = `${SITE}/#book`;

  window.OC.chrome = function chrome({ option, otherOption, otherHref }) {
    const links = NAV_ITEMS.map(
      (it) =>
        `<a href="${it.href}"${it.isWork ? ' aria-current="page"' : ""}>${it.label}</a>`,
    ).join("");

    document.body.insertAdjacentHTML(
      "afterbegin",
      `<header class="nav">
        <div class="nav__bar">
          <a class="nav__logo" href="${SITE}/" aria-label="OnCode home">
            <img src="${window.OC.ASSET_ROOT}oncode-hero-wordmark.png" alt="OnCode" width="799" height="220">
          </a>
          <nav class="nav__links" aria-label="Main">${links}</nav>
          <a class="nav__work-mobile" href="work.html" aria-current="page">Work</a>
          <a class="btn" href="${window.OC.BOOK_URL}">Book the Audit</a>
        </div>
      </header>`,
    );

    document.body.insertAdjacentHTML(
      "beforeend",
      `<footer class="footer">
        <div class="wrap">
          <span>© 2026 OnCode</span>
          <a class="link-underline" href="mailto:oncodesoftware@gmail.com">oncodesoftware@gmail.com</a>
        </div>
      </footer>
      <div class="mock-switch" role="note">
        <span>Mockup, option ${option}</span>
        <a href="${otherHref}">See option ${otherOption}</a>
        <a href="../index.html">Compare</a>
      </div>`,
    );
  };

  window.OC.cta = function cta() {
    return `<section class="cta" aria-labelledby="cta-heading">
      <h2 id="cta-heading">Start with the audit.</h2>
      <p>Thirty minutes. We walk your operation at a high level and agree what the audit covers. The audit fee credits in full against any build.</p>
      <a class="btn" href="${window.OC.BOOK_URL}">Book the Audit</a>
    </section>`;
  };
})();
