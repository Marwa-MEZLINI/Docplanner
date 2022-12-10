import Layout from "./components/layout/Layout";
import BrandsSection from "./components/sections/BrandsSection";
import JoinSection from "./components/sections/JoinSection";
import LeadSection from "./components/sections/LeadSection";
import OfficesSection from "./components/sections/OfficesSection";
import ServicesSection from "./components/sections/ServicesSection";
import StatsSection from "./components/sections/StatsSection";

import { useState } from 'react'

function App(props) {
  const [title, setTitle] = useState('For you!')

  function clickHandler(a) {
    setTitle(a)
  }


  return (
    <Layout title={title}   >

      <LeadSection />
      <ServicesSection title={title} handle={clickHandler}/>
      <BrandsSection />
      <StatsSection />
      <OfficesSection />
      <JoinSection />

    </Layout>
  );
}

export default App;
