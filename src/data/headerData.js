import logo from "@/images/resources/logo-2.png";
import logo2 from "@/images/resources/logo-1.png";

const navItems = [
  {
    id: 1,
    name: "Anasayfa",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Varış Noktaları",
    href: "/destinations",
    subNavItems: [],
  },
  {
    id: 3,
    name: "Rotalar",
    href: "/tours",
    subNavItems: [],
  },
  {
    id: 4,
    name: "Sayfalar",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 5,
    name: "Haberler",
    href: "/news",
    subNavItems: [],
  },
  {
    id: 6,
    name: "İletişim",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "https://www.facebook.com/people/Limitsiz-Rota/pfbid02Fk5QJ1ycMJCK9f2L6x5Y1uc9pLEGLfLQ64KnyoJu223GFB3vE59RdLwh5LSPeUVEl/" },
  { icon: "fa-twitter", link: "https://twitter.com/limitsiz_rota?t=tOL5wdS8MdmvqhbTSXDYmQ&s=08" },
  { icon: "fa-instagram", link: "https://www.instagram.com/limitsiz_rota/" },
  { icon: "fa-youtube", link: "https://www.youtube.com/@limitsizrota" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+09 532 604 37 30",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "kadirvarol_@hotmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
