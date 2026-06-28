import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "1", value: 60 },
  { day: "5", value: 80 },
  { day: "10", value: 100 },
  { day: "15", value: 150 },
  { day: "20", value: 200 },
  { day: "25", value: 280 },
  { day: "28", value: 350 },
  { day: "30", value: 480 },
];

export default function TransactionChart() {
  return (
    <Card>
      <CardContent sx={{ p: 2.5 }}>
        <Stack
          direction="row"
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Transaction Trends
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Spending activity over the last 30 days
            </Typography>
          </Box>
          <Select
            size="small"
            defaultValue="30"
            sx={{
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 2,
              minWidth: 120,
            }}
          >
            <MenuItem value="7">Last 7 Days</MenuItem>
            <MenuItem value="30">Last 30 Days</MenuItem>
            <MenuItem value="90">Last 90 Days</MenuItem>
          </Select>
        </Stack>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1A3FE8" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#1A3FE8" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#6B7A99" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7A99" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontSize: 13,
              }}
              formatter={(v: number) => [`₦${v}`, "Volume"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1A3FE8"
              strokeWidth={2.5}
              fill="url(#gradBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
