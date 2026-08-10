import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#f97316', fontSize: '28px', marginBottom: '16px' }}>
            ⚠️ Application Render Error Detected
          </h1>
          <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '24px' }}>
            An unexpected runtime error occurred while rendering the page:
          </p>

          <pre style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', color: '#f87171', overflowX: 'auto', fontSize: '13px', lineHeight: '1.6' }}>
            {this.state.error?.toString()}
            {'\n'}
            {this.state.errorInfo?.componentStack}
          </pre>

          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#f97316', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
