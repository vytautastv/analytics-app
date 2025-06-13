// Analytics Tracking Script
(function(window) {
  const Analytics = {
    init: function(siteId, options = {}) {
      this.siteId = siteId;
      this.endpoint = options.endpoint || 'https://your-analytics-dashboard.com/api/collect';
      this.autoTrack = options.autoTrack !== false;

      if (this.autoTrack) {
        this.trackPageView();
        this.setupEventListeners();
      }
    },

    trackEvent: async function(eventType, metadata = {}) {
      try {
        const data = {
          siteId: this.siteId,
          eventType: eventType,
          pageUrl: window.location.href,
          referrer: document.referrer,
          metadata: metadata,
          timestamp: new Date().toISOString()
        };

        const response = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          mode: 'cors'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Analytics error:', error);
      }
    },

    trackPageView: function() {
      this.trackEvent('pageview');
    },

    setupEventListeners: function() {
      // Track clicks on elements with data-analytics attribute
      document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-analytics]');
        if (target) {
          const eventName = target.getAttribute('data-analytics');
          this.trackEvent(eventName, {
            element: target.tagName,
            text: target.innerText,
            path: target.getAttribute('href') || ''
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target;
        if (form.hasAttribute('data-analytics-form')) {
          e.preventDefault();
          this.trackEvent('form_submission', {
            formId: form.id || '',
            formName: form.getAttribute('name') || ''
          });
          form.submit();
        }
      });
    }
  };

  // Expose to window
  window.Analytics = Analytics;
})(window);
