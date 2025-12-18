'use client';

import React from 'react';
import './loading.css';

/**
 * Loading skeleton component for page transitions
 * Shows smooth loading state while pages are being fetched and rendered
 */
export default function Loading() {
  return (
    <div className="page-loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}
