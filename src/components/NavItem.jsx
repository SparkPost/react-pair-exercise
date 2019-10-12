import React from "react";
import PropTypes from "prop-types";
import { UnstyledLink } from "@sparkpost/matchbox";
import styles from "./NavItem.module.scss";

const NavItem = ({ children, onClick, selected }) => (
  <div className={styles.NavItemContainer}>
    <UnstyledLink 
      children={children}
      className={selected ? styles.SelectedNavItem : styles.NavItem}
      onClick={onClick}
    />
  </div>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default NavItem;