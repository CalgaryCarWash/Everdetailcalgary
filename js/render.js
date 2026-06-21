// ── RENDER PROMO BAR ─────────────────────────────────────
function renderPromo() {
  return `
  <div class="promo-bar">
    🎉 ${SITE.promoText}
    <a href="packages.html#book">Book Now</a>
  </div>`;
}

// ── RENDER NAV ───────────────────────────────────────────
function renderNav(activePage) {
  const pages = [
    { label: "Home",       href: "index.html"    },
    { label: "Packages",   href: "packages.html" },
    { label: "Services",   href: "services.html" },
    { label: "Contact Us", href: "contact.html"  },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <div class="logo-mark">ED</div>
      EVER-DETAIL
    </a>
    <ul class="nav-links">
      ${links}
      <li><a href="packages.html#book" class="nav-book">Book Now</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    ${mobileLinks}
    <a href="packages.html#book" style="color:var(--red2);font-weight:700;">Book Now</a>
  </div>`;
}

// ── RENDER FOOTER ────────────────────────────────────────
function renderFooter() {
  return `
  <footer>
    <div class="footer-logo">EVER-DETAIL MOBILE DETAILING</div>
    <div class="footer-copy">© ${new Date().getFullYear()} Ever-Detail · Calgary, AB · everdetailcalgary.com</div>
  </footer>`;
}

// ── RENDER HOURS TABLE ───────────────────────────────────
function renderHours() {
  return SITE.hours.map(h => `
    <tr>
      <td>${h.day}</td>
      <td class="${h.open ? 'hours-open' : ''}">${h.time}</td>
    </tr>`).join('');
}

// ── RENDER CONTACT BLOCK ─────────────────────────────────
function renderContactBlock() {
  return `
  <div class="contact-item">
    <div class="contact-icon">📞</div>
    <div>
      <div class="contact-label">Call / Text</div>
      <div class="contact-value"><a href="tel:${SITE.phone.replace(/-/g,'')}">${SITE.phone}</a></div>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">✉️</div>
    <div>
      <div class="contact-label">Email</div>
      <div class="contact-value"><a href="mailto:${SITE.email}">${SITE.email}</a></div>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">📍</div>
    <div>
      <div class="contact-label">Location</div>
      <div class="contact-value">${SITE.address}</div>
    </div>
  </div>`;
}

// ── RENDER PACKAGE CARDS ─────────────────────────────────
function renderPackageCards() {
  return SITE.packages.map(pkg => {
    const isGold = pkg.tag === 'Most Popular';
    const isPlat = pkg.tag === 'Premium';
    const cardClass = isGold ? 'featured-gold' : isPlat ? 'featured-plat' : '';
    const badgeHtml = pkg.tag
      ? `<div class="pkg-badge ${isGold ? 'badge-gold' : 'badge-plat'}">${pkg.tag}</div>`
      : '';
    const surcharges = pkg.surcharges.map(s => `<span class="surcharge-tag">${s}</span>`).join('');
    const sections = pkg.sections.map(sec => `
      <div class="pkg-sec-label">${sec.label}</div>
      <ul class="pkg-features">
        ${sec.items.map(i => `<li>${i}</li>`).join('')}
      </ul>`).join('');

    return `
    <div class="pkg-card ${cardClass}">
      ${badgeHtml}
      <div class="pkg-header">
        <div class="pkg-name">${pkg.emoji} ${pkg.name}</div>
        <div class="pkg-price"><sup>$</sup>${pkg.price}</div>
        <div class="pkg-price-note">Sedan / Car base price</div>
        <div class="pkg-surcharge">${surcharges}</div>
      </div>
      <div class="pkg-body">
        ${sections}
        ${pkg.note ? `<p class="pkg-note">${pkg.note}</p>` : ''}
      </div>
      <a href="#book" class="pkg-cta">Book ${pkg.name}</a>
    </div>`;
  }).join('');
}

// ── TOGGLE MOBILE MENU ───────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
