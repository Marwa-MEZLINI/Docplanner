import Layout from "./components/layout/Layout";
import BrandsSection from "./components/sections/BrandsSection";
import JoinSection from "./components/sections/JoinSection";
import LeadSection from "./components/sections/LeadSection";
import OfficesSection from "./components/sections/OfficesSection";
import ServicesSection from "./components/sections/ServicesSection";
import StatsSection from "./components/sections/StatsSection";

function App() {
  return (
    <Layout>
      <section>
        <LeadSection />
        <ServicesSection />
        <BrandsSection />
        <StatsSection />
        <OfficesSection />
        <JoinSection />
      </section>
    </Layout>
  );
}

export default App;
