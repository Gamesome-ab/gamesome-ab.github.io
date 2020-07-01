import React from "react";
import { Layout, SEO } from "../components";
import hf from "../style/_header-footer.scss";

const BathroomFinderPrivacy = () => {
  return (
    <Layout>
      <SEO />
      <section
        style={{
          minHeight: `calc(100vh - (${hf.headerHeight} + ${hf.footerHeight}))`,
        }}
      >
        <div className="container">
          <h2>Privacy Policy</h2>
          <p>At Gamesome we care about and respect your privacy.</p>
          <p>
            Bathroom Finder does not track or store any personal data about
            users. The app is completely free of ads and is financed entierly by
            Gamesome AB.
          </p>
          <p>
            Bathroom Finder needs permission to your device location while in
            use, in order to show you bathrooms nearby. The app does not track
            your location in the background.
          </p>
          <p>
            All the data in Bathroom Finder is community driven with little
            moderation. We have chosen to trust you to be mindful of other
            users.
          </p>
          <p>
            Finally, please don't enter any personal data into the bathroom
            description field.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BathroomFinderPrivacy;
