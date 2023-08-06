import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { social, logo2, navItems } = headerData;

const MobileMenu = () => {
  const { toggleMenu, menuStatus } = useRootContext();

  return (
    <div
      className={`mobile-nav__wrapper  animated fadeInLeft${menuStatus ? " expanded" : ""
        }`}
    >
      <div
        onClick={() => toggleMenu()}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={() => toggleMenu()}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>
        <div className="logo-box" style={{ display: 'flex', alignItems: 'center' ,marginBottom: 16  }}>
          <Link href="/">
            <a  aria-label="logo image" style={{ display: 'flex', alignItems: 'center' ,marginBottom: 0 }}>
              <Image src={logo2.src} width={155} alt="" />
              <h3 style={{ marginLeft: '-105px', color:"white", marginBottom: 0 }}>Limitsiz Rota</h3>
            </a>
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:kadirvarol_@hotmail.co">kadirvarol_@hotmail.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:+09 532 604 37 30">+09 532 604 37 30</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {social.map(({ icon, link }, index) => (
              <a href={link} key={index} className={`fab ${icon}`}></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
