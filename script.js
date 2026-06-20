// ===== script.js =====
// Gère la communication entre les iframes et la page principale

document.addEventListener('DOMContentLoaded', function () {

  // Auto-ajustement de la hauteur des iframes (optionnel mais pratique)
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(function (iframe) {
    iframe.addEventListener('load', function () {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const h = doc.body.scrollHeight;
        if (iframe.classList.contains('iframe-footer')) {
          iframe.style.height = h + 'px';
        }
      } catch (e) {
        // Sécurité cross-origin : on laisse la hauteur CSS par défaut
      }
    });
  });

  // Écoute les messages de nav.html (liens cliqués)
  window.addEventListener('message', function (e) {
    const data = e.data;
    if (data && data.type === 'navigate') {
      const section = document.getElementById(data.section);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

});
