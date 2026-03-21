import * as React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from "recharts";
import { cn } from "../../../lib/utils";
import {
  ChartDataPoint,
  ChartSeries,
  getChartColor,
  formatTooltipValue,
  formatDateLabel,
  AxisType,
} from "../../../lib/chart-utils";

export interface AreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  data: ChartDataPoint[];
  series: ChartSeries[];
  xAxisKey: string;
  xAxisType?: AxisType;
  xAxisLabel?: string;
  yAxisLabel?: string;
  height?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string | number | Date;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="bg-berget-card border border-berget-border rounded-lg p-3 shadow-lg backdrop-blur-sm">
      {label && (
        <p className="text-xs text-berget-muted-foreground mb-2">
          {formatDateLabel(label)}
        </p>
      )}
      {payload.map(
        (
          entry: { name: string; value: number; color: string },
          index: number,
        ) => (
          <div key={index} className="text-sm">
            <span
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-berget-muted-foreground">{entry.name}:</span>
            <span className="text-berget-foreground font-medium ml-1">
              {formatTooltipValue(entry.value)}
            </span>
          </div>
        ),
      )}
    </div>
  );
};

const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      data,
      series,
      xAxisKey,
      xAxisType = "category",
      xAxisLabel,
      yAxisLabel,
      height = 400,
      showGrid = true,
      showTooltip = true,
      showLegend = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("w-full flex flex-col gap-4", className)}
        {...props}
      >
        {(title || subtitle || description) && (
          <div className="flex flex-col gap-2">
            {title && (
              <h2 className="text-h2 font-h2 leading-h2 tracking-h2 text-berget-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="text-h3 font-h3 leading-h3 tracking-h3 text-berget-muted-foreground">
                {subtitle}
              </h3>
            )}
            {description && (
              <p className="text-p font-p leading-p text-berget-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        <ResponsiveContainer width="100%" height={height}>
          <RechartsAreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--berget-border)"
                strokeOpacity={0.2}
              />
            )}

            <XAxis
              dataKey={xAxisKey}
              type={xAxisType}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--berget-muted-foreground)", fontSize: 12 }}
              tickFormatter={formatDateLabel}
              label={
                xAxisLabel
                  ? {
                      value: xAxisLabel,
                      position: "insideBottom",
                      offset: -5,
                      style: {
                        fill: "var(--berget-muted-foreground)",
                        fontSize: 12,
                      },
                    }
                  : undefined
              }
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--berget-muted-foreground)", fontSize: 12 }}
              tickFormatter={(value) => formatTooltipValue(value)}
              label={
                yAxisLabel
                  ? {
                      value: yAxisLabel,
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        fill: "var(--berget-muted-foreground)",
                        fontSize: 12,
                      },
                    }
                  : undefined
              }
            />

            {showTooltip && (
              <Tooltip
                content={
                  <CustomTooltip
                    active={undefined}
                    payload={undefined}
                    label={undefined}
                  />
                }
              />
            )}

            {showLegend && (
              <Legend
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "10px",
                }}
                formatter={(value: string) => (
                  <span className="text-sm text-berget-muted-foreground">
                    {value}
                  </span>
                )}
              />
            )}

            {series.map((serie) => {
              const color = getChartColor(serie.color);
              return (
                <defs key={serie.dataKey}>
                  <linearGradient
                    id={`gradient-${serie.dataKey}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              );
            })}

            {series.map((serie) => {
              const color = getChartColor(serie.color);
              return (
                <Area
                  key={serie.dataKey}
                  type="monotone"
                  dataKey={serie.dataKey}
                  name={serie.name}
                  stroke={color}
                  strokeWidth={2}
                  fill={`url(#gradient-${serie.dataKey})`}
                />
              );
            })}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
);
AreaChart.displayName = "AreaChart";

export { AreaChart };
