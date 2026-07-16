// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const closeNav = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  // Close when tapping outside the header
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !e.target.closest('.site-header')) closeNav();
  });
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

// Email chooser modal
const emailModal = document.getElementById('emailModal');
if (emailModal) {
  let lastFocus = null;
  const openModal = () => {
    lastFocus = document.activeElement;
    emailModal.hidden = false;
    const firstBtn = emailModal.querySelector('.btn');
    if (firstBtn) firstBtn.focus();
  };
  const closeModal = () => {
    if (emailModal.hidden) return;
    emailModal.hidden = true;
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  // Open the chooser instead of firing the mailto link directly
  document.querySelectorAll('[data-email-trigger]').forEach((el) =>
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    })
  );

  // Close interactions
  emailModal.querySelectorAll('[data-close]').forEach((el) =>
    el.addEventListener('click', closeModal)
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // "Open email app" → let the mailto fire, then close
  const mailLink = emailModal.querySelector('a[href^="mailto:"]');
  if (mailLink) mailLink.addEventListener('click', () => setTimeout(closeModal, 150));

  // "Copy address" → clipboard with feedback
  const copyBtn = emailModal.querySelector('[data-copy]');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e2) { /* ignore */ }
        document.body.removeChild(ta);
      }
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('is-copied');
      setTimeout(() => {
        copyBtn.textContent = original;
        copyBtn.classList.remove('is-copied');
      }, 1800);
    });
  }
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
