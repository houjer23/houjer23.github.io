// Keep section navigation in sync without changing native anchor behavior.
const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

// A refresh starts at the introduction, even after following a section link.
// Normal navigation to a shared section URL still follows its anchor.
const navigation = performance.getEntriesByType('navigation')[0];
if (navigation?.type === 'reload') {
  const previousScrollRestoration = history.scrollRestoration;
  history.scrollRestoration = 'manual';
  if (location.hash) {
    history.replaceState(history.state, '', location.pathname + location.search);
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  window.addEventListener('pageshow', () => {
    // Let the browser finish its own restoration before restoring the policy.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      history.scrollRestoration = previousScrollRestoration;
      updateNavigation();
    });
  }, { once: true });
}

function updateNavigation() {
  let current = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 140) current = section.id;
  }
  for (const link of navigationLinks) {
    if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

let updatePending = false;
window.addEventListener('scroll', () => {
  if (updatePending) return;
  updatePending = true;
  requestAnimationFrame(() => {
    updateNavigation();
    updatePending = false;
  });
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
