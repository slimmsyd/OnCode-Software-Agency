// Option A card, used on the portfolio grid and in "More work".

window.OC.cardA = function cardA(project, { eager = false, level = 2 } = {}) {
  const { esc, img, ARROW, CATEGORIES } = window.OC;
  const contain = project.fit === "contain" ? " card__media--contain" : "";
  return `<li class="card">
    <div class="card__media${contain}">${img(project, { eager })}</div>
    <h${level} class="card__title">
      <a class="link-arrow" href="project.html?p=${project.slug}"><span>${esc(project.title)}</span>${ARROW}</a>
    </h${level}>
    <p class="card__text">${esc(project.summary)}</p>
    <p class="card__tag">${esc(CATEGORIES[project.category])}</p>
  </li>`;
};
