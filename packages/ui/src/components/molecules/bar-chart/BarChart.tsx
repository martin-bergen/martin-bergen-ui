import * as React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from "recharts";
import { cn } from "../../../lib/utils";
import { Panel } from "../../atoms/panel";
import {
  ChartDataPoint,
  ChartSeries,
  getChartColor,
  formatTooltipValue,
  formatDateLabel,
  AxisType,
} from "../../../lib/chart-utils";

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  data: ChartDataPoint[];
  series: ChartSeries[];
  xAxisKey: string;
  xAxisType?: AxisType;
  xAxisLabel?: string;
  yAxisLabel?: string;
  yAxisUnit?: string;
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
  yAxisUnit?: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
  yAxisUnit,
}: CustomTooltipProps) => {
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
              {formatTooltipValue(entry.value, yAxisUnit)}
            </span>
          </div>
        ),
      )}
    </div>
  );
};

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
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
      yAxisUnit,
      height = 400,
      showGrid = true,
      showTooltip = true,
      showLegend = true,
      ...props
    },
    ref,
  ) => {
    return (
      <Panel padding="md" radius="default">
        <div
          ref={ref}
          className={cn("w-full flex flex-col gap-4", className)}
          {...props}
        >
          {(title || subtitle || description) && (
            <div className="flex flex-col gap-2">
              {title && (
                <h2 className="text-[var(--text-h2)] font-[var(--font-h2)] leading-[var(--leading-h2)] tracking-[var(--tracking-h2)] text-berget-foreground">
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
            <RechartsBarChart
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
                tickFormatter={(value) => formatTooltipValue(value, yAxisUnit)}
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
                      yAxisUnit={yAxisUnit}
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
                  <Bar
                    key={serie.dataKey}
                    dataKey={serie.dataKey}
                    name={serie.name}
                    fill={color}
                    radius={[4, 4, 0, 0]}
                    maxBarSize={60}
                  />
                );
              })}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    );
  },
);
BarChart.displayName = "BarChart";

export { BarChart };
