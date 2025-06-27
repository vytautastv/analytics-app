"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

interface FacebookPixelProps {
  pixelId: string;
}

export function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    // Load Facebook Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize Facebook Pixel
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }, [pixelId]);

  return null;
}

// Helper functions for tracking events
export const trackFacebookEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Common event tracking functions
export const trackPurchase = (value: number, currency: string = 'USD') => {
  trackFacebookEvent('Purchase', { value, currency });
};

export const trackLead = () => {
  trackFacebookEvent('Lead');
};

export const trackCompleteRegistration = () => {
  trackFacebookEvent('CompleteRegistration');
};

export const trackAddToCart = (value: number, currency: string = 'USD') => {
  trackFacebookEvent('AddToCart', { value, currency });
};

export const trackInitiateCheckout = (value: number, currency: string = 'USD') => {
  trackFacebookEvent('InitiateCheckout', { value, currency });
};

export const trackViewContent = (contentName: string, contentCategory?: string) => {
  trackFacebookEvent('ViewContent', { contentName, contentCategory });
};

export const trackSearch = (searchString: string) => {
  trackFacebookEvent('Search', { searchString });
};

export const trackCustomEvent = (eventName: string, params?: any) => {
  trackFacebookEvent(eventName, params);
};
