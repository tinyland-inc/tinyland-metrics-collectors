/**
 * Interface for writing metric gauge values.
 * Matches the subset of MetricsRegistry used by collectors.
 */
export interface MetricsWriter {
  setGauge(name: string, value: number, labels?: Record<string, string>): void;
}

/**
 * Shape of accessibility metrics data returned by the provider function.
 */
export interface AccessibilityMetricsData {
  total: number;
  critical: number;
  byType: {
    contrast: number;
    aria: number;
    keyboard: number;
    altText: number;
  };
  byComponent: Record<string, number>;
  byPage: Record<string, number>;
  byTheme: Record<string, number>;
}

/**
 * Configuration for the metrics collectors DI container.
 */
export interface MetricsCollectorsConfig {
  metricsWriter: MetricsWriter;
  getAccessibilityMetrics: () => AccessibilityMetricsData;
  baseDir: string;
}
