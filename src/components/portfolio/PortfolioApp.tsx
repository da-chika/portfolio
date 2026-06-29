import { NuqsAdapter } from "nuqs/adapters/react";
import { PortfolioFilter } from "./PortfolioFilter";

export function PortfolioApp() {
  return (
    <NuqsAdapter>
      <PortfolioFilter />
    </NuqsAdapter>
  );
}
