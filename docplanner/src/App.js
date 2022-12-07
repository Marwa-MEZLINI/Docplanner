import Layout from "./components/layout/Layout";
import BrandsSection from "./components/sections/BrandsSection";
import LeadSection from "./components/sections/LeadSection";
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
      </section>
    </Layout>
  );
}

export default App;
