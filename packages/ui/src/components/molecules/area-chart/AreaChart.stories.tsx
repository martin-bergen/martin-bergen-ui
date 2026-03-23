import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart } from "./AreaChart";
import type { ChartDataPoint, ChartSeries } from "../../../lib/chart-utils";

const meta = {
  title: "Molecules/Area Chart",
  component: AreaChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Area Chart component for displaying data trends over time.

**Perfect for:**
- API usage over time
- Account balance trends
- User growth metrics
- Resource consumption
- Multi-series comparisons
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: ChartDataPoint[] = Array.from({ length: 31 }, (_, i) => ({
  date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
  "api-key-1": Math.floor(Math.random() * 150000) + 50000,
  "api-key-2": Math.floor(Math.random() * 100000) + 30000,
}));

const sampleSeries: ChartSeries[] = [
  { dataKey: "api-key-1", name: "API Key 1", color: "chart-2" },
  { dataKey: "api-key-2", name: "API Key 2", color: "chart-3" },
];

const singleSeriesData: ChartDataPoint[] = Array.from(
  { length: 15 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    usage: Math.floor(Math.random() * 100000) + 50000,
  }),
);

const singleSeries: ChartSeries[] = [
  { dataKey: "usage", name: "Usage", color: "chart-2" },
];

const multiSeriesData: ChartDataPoint[] = Array.from(
  { length: 20 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    "service-a": Math.floor(Math.random() * 120000) + 40000,
    "service-b": Math.floor(Math.random() * 90000) + 30000,
    "service-c": Math.floor(Math.random() * 70000) + 20000,
  }),
);

const multiSeries: ChartSeries[] = [
  { dataKey: "service-a", name: "Service A", color: "chart-2" },
  { dataKey: "service-b", name: "Service B", color: "chart-3" },
  { dataKey: "service-c", name: "Service C", color: "chart-4" },
];

const customColorsData: ChartDataPoint[] = Array.from(
  { length: 10 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    metric1: Math.floor(Math.random() * 80000) + 40000,
    metric2: Math.floor(Math.random() * 60000) + 30000,
    metric3: Math.floor(Math.random() * 40000) + 20000,
  }),
);

const customColorsSeries: ChartSeries[] = [
  { dataKey: "metric1", name: "Metric 1", color: "chart-1" },
  { dataKey: "metric2", name: "Metric 2", color: "chart-4" },
  { dataKey: "metric3", name: "Metric 3", color: "chart-5" },
];

const accountOverviewData: ChartDataPoint[] = Array.from(
  { length: 31 },
  (_, i) => ({
    date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
    "api-key-1": Math.floor(Math.random() * 150000) + 50000,
    "api-key-2": Math.floor(Math.random() * 100000) + 30000,
    "api-key-3": Math.floor(Math.random() * 80000) + 20000,
  }),
);

const accountOverviewSeries: ChartSeries[] = [
  { dataKey: "api-key-1", name: "API Key 1", color: "chart-2" },
  { dataKey: "api-key-2", name: "API Key 2", color: "chart-3" },
  { dataKey: "api-key-3", name: "API Key 3", color: "chart-4" },
];

const weekData: ChartDataPoint[] = Array.from({ length: 7 }, (_, i) => ({
  date: `2026-03-${(i + 1).toString().padStart(2, "0")}`,
  users: Math.floor(Math.random() * 5000) + 2000,
}));

const weekSeries: ChartSeries[] = [
  { dataKey: "users", name: "Users", color: "chart-2" },
];

export const Default: Story = {
  args: {
    title: "Usage Trends",
    subtitle: "Track your usage over time",
    data: singleSeriesData,
    series: singleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
};

export const MultipleSeries: Story = {
  args: {
    title: "Multi-Service Usage",
    subtitle: "Compare usage across different services",
    description: "Daily usage metrics for all services",
    data: multiSeriesData,
    series: multiSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
};

export const AccountOverview: Story = {
  args: {
    title: "Account Overview",
    subtitle: "Current balance and usage for the past week",
    description: "Usage by API Key (30 days)",
    data: accountOverviewData,
    series: accountOverviewSeries,
    xAxisKey: "date",
    xAxisType: "category",
    xAxisLabel: "Date",
    yAxisLabel: "Tokens (K)",
    height: 450,
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
    data: singleSeriesData,
    series: singleSeries,
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
    data: singleSeriesData,
    series: singleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
    showLegend: false,
  },
};

export const Responsive: Story = {
  args: {
    title: "Responsive Chart",
    subtitle: "Adapts to container size",
    description: "Resize the browser to see responsiveness",
    data: sampleData,
    series: sampleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 400,
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "667px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
          type: "tablet",
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" },
          type: "desktop",
        },
      },
    },
  },
};

export const WeekView: Story = {
  args: {
    title: "Weekly Overview",
    subtitle: "Last 7 days",
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
    data: sampleData,
    series: sampleSeries,
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
    yAxisLabel: "Usage (Tokens)",
    height: 400,
  },
};

export const Compact: Story = {
  args: {
    title: "Compact View",
    data: singleSeriesData.slice(0, 5),
    series: singleSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 300,
  },
};

export const Large: Story = {
  args: {
    title: "Large View",
    data: multiSeriesData,
    series: multiSeries,
    xAxisKey: "date",
    xAxisType: "category",
    height: 600,
  },
};
