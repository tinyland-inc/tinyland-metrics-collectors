import type { MetricsCollectorsConfig, AccessibilityMetricsData } from './types.js';

const DEFAULT_ACCESSIBILITY_METRICS: AccessibilityMetricsData = {
  total: 0,
  critical: 0,
  byType: { contrast: 0, aria: 0, keyboard: 0, altText: 0 },
  byComponent: {},
  byPage: {},
  byTheme: {},
};

function createDefaultConfig(): MetricsCollectorsConfig {
  return {
    metricsWriter: { setGauge: () => {} },
    getAccessibilityMetrics: () => ({ ...DEFAULT_ACCESSIBILITY_METRICS }),
    baseDir: process.cwd(),
  };
}

let _config: MetricsCollectorsConfig = createDefaultConfig();

/**
 * Configure the metrics collectors with partial or full configuration.
 * Merges provided fields into the current config.
 */
export function configureMetricsCollectors(config: Partial<MetricsCollectorsConfig>): void {
  _config = { ..._config, ...config };
}

/**
 * Returns the current metrics collectors configuration.
 */
export function getMetricsCollectorsConfig(): MetricsCollectorsConfig {
  return _config;
}

/**
 * Resets configuration to defaults (no-op writer, no-op accessibility, process.cwd()).
 */
export function resetMetricsCollectorsConfig(): void {
  _config = createDefaultConfig();
}
