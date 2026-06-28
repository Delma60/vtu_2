import { Box, Grid } from "@mui/material";
import WalletCard from "../components/wallet-card";
import AutoFundCard from "../components/auto-fund-card";
import TransactionChart from "../components/tx-chart";
import QuickServices from "../components/quick-services";
import PromoCards from "../components/promo-card";
import RecentTransactions from "../components/recent-transaction";

export default function DashboardPage() {
  return (
    <>
      {/* Row 1: Wallet + Auto-fund */}
      <Grid container sx={{ mb: 2.5 }} spacing={2.5}>
        <Grid size={{ xs: 12, md: 8 }}>
          <WalletCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <AutoFundCard />
        </Grid>
      </Grid>

      {/* Row 2: Chart + Quick Services */}
      <Grid container spacing={2.5} sx={{ mb: 2.5 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TransactionChart />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickServices />
        </Grid>
      </Grid>

      {/* Row 3: Promo cards */}
      <Box sx={{ mb: 2.5 }}>
        <PromoCards />
      </Box>

      {/* Row 4: Recent Transactions */}
      <RecentTransactions />
    </>
  );
}
