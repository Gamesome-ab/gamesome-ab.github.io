import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

import { Header, Contact, CookiesConsent } from ".";

const Layout = ({ hero, children }) => {
  return (
    <>
      <IconContext.Provider value={{ className: "icon" }}>
        <CookiesConsent />
        {hero}
        <Header />
        <main>{children}</main>
        <footer>
          <Contact />
        </footer>
      </IconContext.Provider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
