import Layout from "./components/layout/Layout";
import BrandsSection from "./components/sections/BrandsSection";
import JoinSection from "./components/sections/JoinSection";
import LeadSection from "./components/sections/LeadSection";
import OfficesSection from "./components/sections/OfficesSection";
import ServicesSection from "./components/sections/ServicesSection";
import StatsSection from "./components/sections/StatsSection";

import { useState } from 'react'
import ClickContext from "./components/context";
import { ClickContextProvider } from "./components/context";

function App(props) {



  return (

    <Layout>

      <LeadSection />
      <ServicesSection />
      <BrandsSection />
      <StatsSection />
      <OfficesSection />
      <JoinSection />

    </Layout>

  );
}

export default App;
