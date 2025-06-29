"use client";

declare global {
  interface Window {
    CeipalWidget?: {
      openWidget: () => void;
      [key: string]: any;
    };
  }
}

import React, { useEffect, useState, useRef } from 'react';

export default function CareersPage() {
  const [loading, setLoading] = useState(true);
  const widgetInitialized = useRef(false);
  const initAttemptsRef = useRef(0);

  const tryOpenWidget = () => {
    const maxAttempts = 10;
    const attemptToOpenWidget = () => {
      if (initAttemptsRef.current >= maxAttempts) {
        console.log(`Max attempts (${maxAttempts}) reached. Giving up and showing placeholder.`);
        setLoading(false);
        return;
      }
      
      initAttemptsRef.current += 1;
      
      if (window.CeipalWidget) {
        window.CeipalWidget.openWidget();
        setLoading(false);
      } else {
        const nextDelay = 300 * Math.pow(1.2, initAttemptsRef.current); 
        console.log(`CeipalWidget not found, trying again in ${nextDelay}ms`);
        setTimeout(attemptToOpenWidget, nextDelay);
      }
    };
    
    attemptToOpenWidget();
  };

  useEffect(() => {
    const setupWidget = () => {
      const existingScript = document.querySelector('script[src*="jobsapi.ceipal.com"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      const container = document.getElementById('example-widget-container');
      if (container) {
        container.innerHTML = '';
      }
      
      const script = document.createElement('script');
      script.type = 'text/javascript';
      
      const widgetUrl = process.env.NEXT_PUBLIC_WIDGET_URL || 'https://jobsapi.ceipal.com/APISource/widget.js';
      const apiKey = process.env.NEXT_PUBLIC_WIDGET_API_KEY || '';
      const portalId = process.env.NEXT_PUBLIC_WIDGET_PORTAL_ID || '';
      
      
      script.src = widgetUrl;
      script.setAttribute('data-ceipal-api-key', apiKey);
      script.setAttribute('data-ceipal-career-portal-id', portalId);
      
      script.onload = () => {
        console.log('CEIPAL script loaded successfully');
        widgetInitialized.current = true;
        
        tryOpenWidget();
      };
      
      script.onerror = (e) => {
        console.error('Failed to load CEIPAL script', e);
        setLoading(false);
      };
      
      document.body.appendChild(script);
    };
    
    setupWidget();
    
    const safetyTimeout = setTimeout(() => {
      if (loading) {
        console.log('Safety timeout reached, showing container anyway');
        setLoading(false);
      }
    }, 8000);
    
    return () => {
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white font-[Satoshi]">
        <div className="h-[80px] md:h-[100px]"></div>
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D3B6FB]"></div>
            <p className="mt-4 text-[#1A0B2E] font-medium">Loading job opportunities...</p>
          </div>
        )}
        
        <div 
          id="example-widget-container" 
          className={loading ? "opacity-0" : "opacity-100"}
          style={{ 
            position: 'relative',
            minHeight: 'calc(100vh - 100px)',
            transition: 'opacity 0.3s ease-in-out', 
            height: 'auto',
          }}
        ></div>
        
        {!loading && (
          <div 
            id="fallback-message" 
            style={{
              display: 'none', 
              textAlign: 'center',
              padding: '2rem',
              marginTop: '2rem'
            }}
          >
            <p className="text-[#1A0B2E] text-lg">
              Having trouble viewing our job listings? 
              <button 
                onClick={tryOpenWidget} 
                className="ml-2 text-[#9747FF] underline"
              >
                Click here to retry
              </button>
            </p>
          </div>
        )}
      </div>
    </>
  );
}