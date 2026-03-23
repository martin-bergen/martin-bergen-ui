export type ChartColor =
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5";

export type AxisType = "category" | "number";

export interface ChartDataPoint {
  [key: string]: string | number | Date;
}

export interface ChartSeries {
  dataKey: string;
  name: string;
  color?: ChartColor;
}

const CHART_COLORS: Record<ChartColor, string> = {
  "chart-1": "var(--berget-chart-1)",
  "chart-2": "var(--berget-chart-2)",
  "chart-3": "var(--berget-chart-3)",
  "chart-4": "var(--berget-chart-4)",
  "chart-5": "var(--berget-chart-5)",
};

export function getChartColor(color?: ChartColor): string {
  return color ? CHART_COLORS[color] : CHART_COLORS["chart-2"];
}

export function formatTooltipValue(value: number, unit?: string): string {
  if (unit === "K") {
    return `${(value / 1000).toFixed(1)}K`;
  }
  if (unit === "M") {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  return value.toLocaleString();
}

export function formatDateLabel(date: Date | string | number): string {
  if (date instanceof Date) {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  if (typeof date === "string" || typeof date === "number") {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  return String(date);
}
