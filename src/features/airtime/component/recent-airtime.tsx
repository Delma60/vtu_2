import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Stack,
  Link,
  Avatar,
} from "@mui/material";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";

const HISTORY = [
  {
    provider: "MTN",
    number: "0806****123",
    amount: "₦1,000.00",
    status: "Success",
    date: "May 12, 10:24 AM",
    color: "#F5A623",
    bg: "#FFFDF5",
  },
  {
    provider: "Airtel",
    number: "0901****882",
    amount: "₦5,000.00",
    status: "Success",
    date: "May 11, 04:15 PM",
    color: "#E8001C",
    bg: "#FFF5F6",
  },
  {
    provider: "Glo",
    number: "0805****001",
    amount: "₦500.00",
    status: "Failed",
    date: "May 10, 09:30 AM",
    color: "#28A745",
    bg: "#F4FFF7",
  },
];

const STATUS_MAP: Record<string, { color: "success" | "error"; bg: string }> = {
  Success: { color: "success", bg: "#ECFDF3" },
  Failed: { color: "error", bg: "#FEF3F2" },
};

export default function RecentAirtime() {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Recent Airtime
        </Typography>
        <Link
          href="#"
          underline="hover"
          sx={{ fontSize: 13, fontWeight: 600, color: "primary.main" }}
        >
          View All
        </Link>
      </Stack>

      <Table size="small">
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                color: "text.secondary",
                fontWeight: 700,
                fontSize: 12,
                borderBottom: "1px solid",
                borderColor: "grey.100",
                pb: 1.5,
              },
            }}
          >
            <TableCell>Provider</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {HISTORY.map((row) => {
            const st = STATUS_MAP[row.status];
            return (
              <TableRow
                key={row.number}
                sx={{
                  "&:last-child td": { border: 0 },
                  "& td": { py: 2, borderColor: "grey.50" },
                }}
              >
                <TableCell>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ alignItems: "center" }}
                  >
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: row.bg,
                        color: row.color,
                      }}
                    >
                      <PhoneAndroidRoundedIcon sx={{ fontSize: 16 }} />
                    </Avatar>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {row.provider}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "monospace" }}
                  >
                    {row.number}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {row.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    size="small"
                    color={st.color}
                    sx={{
                      bgcolor: st.bg,
                      fontSize: 11,
                      height: 24,
                      fontWeight: 600,
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      whiteSpace: "pre-line",
                      textAlign: "right",
                      display: "block",
                    }}
                  >
                    {row.date.replace(", ", ",\n")}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
}
