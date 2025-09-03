// Comprehensive ResizeObserver error suppression
const suppressResizeObserverErrors = () => {
  // Suppress console errors
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('ResizeObserver') || 
        args[0]?.includes?.('ResizeObserver loop') ||
        args[0]?.includes?.('undelivered notifications')) {
      return;
    }
    originalError.apply(console, args);
  };

  // Suppress window error events
  const originalAddEventListener = window.addEventListener;
  window.addEventListener = function(type, listener, options) {
    if (type === 'error') {
      const wrappedListener = (event) => {
        if (event.message?.includes?.('ResizeObserver') ||
            event.message?.includes?.('ResizeObserver loop') ||
            event.message?.includes?.('undelivered notifications')) {
          return;
        }
        listener(event);
      };
      return originalAddEventListener.call(this, type, wrappedListener, options);
    }
    return originalAddEventListener.call(this, type, listener, options);
  };

  // Suppress unhandled promise rejections
  const originalUnhandledRejection = window.addEventListener;
  window.addEventListener = function(type, listener, options) {
    if (type === 'unhandledrejection') {
      const wrappedListener = (event) => {
        if (event.reason?.message?.includes?.('ResizeObserver') ||
            event.reason?.message?.includes?.('ResizeObserver loop') ||
            event.reason?.message?.includes?.('undelivered notifications')) {
          event.preventDefault();
          return;
        }
        listener(event);
      };
      return originalUnhandledRejection.call(this, type, wrappedListener, options);
    }
    return originalUnhandledRejection.call(this, type, listener, options);
  };

  // Override ResizeObserver to be more resilient
  if (typeof window !== 'undefined' && window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
      constructor(callback) {
        super((entries, observer) => {
          try {
            callback(entries, observer);
          } catch (error) {
            // Silently handle ResizeObserver errors
            if (error.message?.includes?.('ResizeObserver')) {
              return;
            }
            throw error;
          }
        });
      }
    };
  }
};

export default suppressResizeObserverErrors;
