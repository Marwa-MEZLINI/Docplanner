import Layout from "./components/layout/Layout";
import BrandsSection from "./components/sections/BrandsSection";
import LeadSection from "./components/sections/LeadSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <Layout>
      <section>
        <LeadSection />
        <ServicesSection />
        <BrandsSection />
      </section>
    </Layout>
  );
}

export default App;
