import React from "react";
import PropTypes from "prop-types";
import { Link as InternalLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const ListLink = ({ to, children, ...rest }) => {
  return (
    <li>
      <Link to={to} {...rest}>
        {children}
      </Link>
    </li>
  );
};

const Link = ({ to, showButton, children, ...rest }) => {
  const link = isAbsoluteUrl(to) ? (
    <OutboundLink href={to} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </OutboundLink>
  ) : (
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  );

  return link;
};

const isAbsoluteUrl = url => {
  const pattern = /^(https?:\/\/)|(mailto:)|(tel:)/i;
  return pattern.test(url);
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export { Link, ListLink };
