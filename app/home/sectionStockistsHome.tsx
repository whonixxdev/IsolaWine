import { getCollabLogos } from "./collabLogos";
import StockistsGrid from "./StockistsGrid";

export default function SectionStockistsHome() {
  const { online, offline } = getCollabLogos();

  return <StockistsGrid online={online} offline={offline} />;
}