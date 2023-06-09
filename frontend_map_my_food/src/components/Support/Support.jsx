import React from "react";
import { useLocation } from "react-router-dom";
import FAQ from "./FAQ/FAQ";
import Legal from "./Legal/Legal";
import Partner from "./Partner/Partner";

const Support = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="container_supports">
      {pathname == "/supports" && <Partner />}
      {pathname == "/support/issues/faq" && <FAQ />}
      {pathname == "/support/issues/legal" && <Legal />}
      {pathname == "/support/issues/partner-onboarding" && <Partner />}
    </div>
  );
};

export default Support;
