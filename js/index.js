'use strict';

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-menu');

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('span').textContent = isOpen ? 'CLOSE' : 'MENU';
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('span').textContent = 'MENU';
  });
});

const tabButtons = document.querySelectorAll('.tab');
const tabPanel = document.querySelector('#expertise-panel');
const expertise = {
  branding: ['Our team of experts specializes in creating unique and effective designs', 'We created marketing materials that were consistent with the new brand identity, such as business cards, brochures, and social media graphics.'],
  design: ['We create thoughtful digital experiences', 'We design clear, engaging websites and visual systems that help every brand communicate with confidence.'],
  marketing: ['We connect brands with the right audience', 'We build focused marketing campaigns that grow awareness, strengthen relationships, and encourage action.']
};

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((tab) => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
    const [title, description] = expertise[button.dataset.panel];
    tabPanel.querySelector('.panel-title').textContent = title;
    tabPanel.querySelectorAll('p')[1].textContent = description;
  });
});

// Analytics hooks are ready for the GA4 Measurement ID and GTM container ID from the test owner.
document.querySelectorAll('[data-track]').forEach((element) => {
  element.addEventListener('click', () => {
    const eventName = element.dataset.track;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click', { event_category: 'engagement', event_label: eventName });
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'ui_click', event_category: 'engagement', event_label: eventName });
    }
  });
});
