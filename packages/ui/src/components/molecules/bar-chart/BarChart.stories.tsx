import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./BarChart";
import type { ChartDataPoint, ChartSeries } from "../../../lib/chart-utils";

const meta = {
  title: "Molecules/Bar Chart",
  component: BarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Bar Chart component for displaying categorical data comparisons.

**Perfect for:**
- API usage metrics (input/output tokens)
- Daily/weekly/monthly comparisons
- Multi-metric comparisons
- Resource usage tracking
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: ChartDataPoint[] = Array.from({ length: 15 }, (_, i) => ({
  date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
  input: Math.floor(Math.random() * 80000) + 20000,
  output: Math.floor(Math.random() * 60000) + 10000,
}));

const sampleSeries: ChartSeries[] = [
  { dataKey: "input", name: "Input Tokens", color: "chart-2" },
  { dataKey: "output", name: "Output Tokens", color: "chart-3" },
];

const multiSeriesData: ChartDataPoint[] = Array.from(
  { length: 10 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    metric1: Math.floor(Math.random() * 70000) + 30000,
    metric2: Math.floor(Math.random() * 60000) + 20000,
    metric3: Math.floor(Math.random() * 50000) + 10000,
  }),
);

const multiSeries: ChartSeries[] = [
  { dataKey: "metric1", name: "Metric 1", color: "chart-2" },
  { dataKey: "metric2", name: "Metric 2", color: "chart-3" },
  { dataKey: "metric3", name: "Metric 3", color: "chart-4" },
];

const customColorsData: ChartDataPoint[] = Array.from(
  { length: 8 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    value1: Math.floor(Math.random() * 50000) + 20000,
    value2: Math.floor(Math.random() * 40000) + 15000,
  }),
);

const customColorsSeries: ChartSeries[] = [
  { dataKey: "value1", name: "Value 1", color: "chart-1" },
  { dataKey: "value2", name: "Value 2", color: "chart-5" },
];

const apiUsageData: ChartDataPoint[] = Array.from({ length: 15 }, (_, i) => ({
  date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
  input: Math.floor(Math.random() * 90000) + 30000,
  output: Math.floor(Math.random() * 70000) + 20000,
}));

const apiUsageSeries: ChartSeries[] = [
  { dataKey: "input", name: "Input Tokens", color: "chart-2" },
  { dataKey: "output", name: "Output Tokens", color: "chart-3" },
];

const weekData: ChartDataPoint[] = Array.from({ length: 7 }, (_, i) => ({
  date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
  requests: Math.floor(Math.random() * 10000) + 5000,
  errors: Math.floor(Math.random() * 500) + 50,
}));

const weekSeries: ChartSeries[] = [
  { dataKey: "requests", name: "Requests", color: "chart-2" },
  { dataKey: "errors", name: "Errors", color: "chart-5" },
];

const monthData: ChartDataPoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
  input: Math.floor(Math.random() * 100000) + 20000,
  output: Math.floor(Math.random() * 80000) + 15000,
}));

const monthSeries: ChartSeries[] = [
  { dataKey: "input", name: "Input Tokens", color: "chart-2" },
  { dataKey: "output", name: "Output Tokens", color: "chart-3" },
];

const singleMetricData: ChartDataPoint[] = Array.from(
  { length: 10 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    value: Math.floor(Math.random() * 80000) + 40000,
  }),
);

const singleMetricSeries: ChartSeries[] = [
  { dataKey: "value", name: "Value", color: "chart-2" },
];

export const Default: Story = {
  args: {
    title: "Token Usage",
    subtitle: "Input and output tokens per day",
    data: sampleData,
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
};

export const APIUsage: Story = {
  args: {
    title: "API Usage",
    subtitle: "Daily token consumption",
    description: "Input and output tokens per day",
    data: apiUsageData,
    series: apiUsageSeries,
    xAxisKey: "date",
    xAxisType: "category",
    xAxisLabel: "Date",
    yAxisLabel: "Tokens (K)",
    yAxisUnit: "K",
    height: 450,
  },
};

export const MultipleSeries: Story = {
  args: {
    title: "Multi-Metric Comparison",
    subtitle: "Compare multiple metrics",
    description: "Daily metrics comparison",
    data: multiSeriesData,
    series: multiSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
};

export const CustomColors: Story = {
  args: {
    title: "Custom Color Scheme",
    subtitle: "Using different chart colors",
    data: customColorsData,
    series: customColorsSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
};

export const NoGrid: Story = {
  args: {
    title: "Clean Layout",
    subtitle: "Without grid lines",
    data: sampleData,
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
    showGrid: false,
  },
};

export const NoLegend: Story = {
  args: {
    title: "Minimal Design",
    subtitle: "Without legend",
    data: sampleData,
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
    showLegend: false,
  },
};

export const WeekView: Story = {
  args: {
    title: "Weekly Overview",
    subtitle: "Last 7 days",
    description: "Requests and errors",
    data: weekData,
    series: weekSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 350,
  },
};

export const MonthView: Story = {
  args: {
    title: "Monthly Overview",
    subtitle: "Entire month of March 2026",
    description: "Input and output token usage",
    data: monthData,
    series: monthSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 500,
  },
};

export const WithAxisLabels: Story = {
  args: {
    title: "Labeled Axes",
    subtitle: "With custom axis labels",
    data: sampleData,
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    xAxisLabel: "Date (March 2026)",
    yAxisLabel: "Tokens",
    height: 400,
  },
};

export const WithUnit: Story = {
  args: {
    title: "With Unit Display",
    subtitle: "Y-axis values in thousands",
    data: sampleData,
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    yAxisLabel: "Tokens",
    yAxisUnit: "K",
    height: 400,
  },
};

export const SingleMetric: Story = {
  args: {
    title: "Single Metric",
    subtitle: "Tracking one metric over time",
    data: singleMetricData,
    series: singleMetricSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
};

export const Compact: Story = {
  args: {
    title: "Compact View",
    data: sampleData.slice(0, 5),
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 300,
  },
};

export const Large: Story = {
  args: {
    title: "Large View",
    data: monthData,
    series: monthSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 600,
  },
};

export const HighVolume: Story = {
  args: {
    title: "High Volume Data",
    subtitle: "Large token volumes",
    description: "Input and output tokens in millions",
    data: Array.from({ length: 20 }, (_, i) => ({
      name: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
      date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
      input: Math.floor(Math.random() * 900000) + 100000,
      output: Math.floor(Math.random() * 700000) + 80000,
    })),
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    yAxisLabel: "Tokens",
    yAxisUnit: "K",
    height: 500,
  },
};

export const ErrorTracking: Story = {
  args: {
    title: "Error Tracking",
    subtitle: "Requests vs Errors",
    description: "Monitor API health",
    data: weekData,
    series: weekSeries,
    xAxisKey: "date",
    xAxisType: "category",
    yAxisLabel: "Count",
    height: 350,
  },
};
