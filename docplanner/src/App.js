import Layout from "./components/layout/Layout";
import LeadSection from "./components/sections/LeadSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <Layout>
      <section>
        <LeadSection />
        <ServicesSection />
      </section>
    </Layout>
  );
}

export default App;
