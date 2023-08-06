import logo from "@/images/resources/logo-1.png";

const social = [
  { icon: "fa-facebook-square", link: "https://www.facebook.com/people/Limitsiz-Rota/pfbid02Fk5QJ1ycMJCK9f2L6x5Y1uc9pLEGLfLQ64KnyoJu223GFB3vE59RdLwh5LSPeUVEl/" },
  { icon: "fa-twitter", link: "https://twitter.com/limitsiz_rota?t=tOL5wdS8MdmvqhbTSXDYmQ&s=08" },
  { icon: "fa-instagram", link: "https://www.instagram.com/limitsiz_rota/" },
  { icon: "fa-youtube", link: "https://www.youtube.com/@limitsizrota" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Limitsiz Rota",
  about:
    "Gezi ve Tur Acentemize hoş geldiniz. Anlamlı bir deneyim sunmak için buradayız.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+09 532 604 37 30",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "kadirvarol_@hotmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Yeni Mahalle Lale Caddesi Yavuz Kolukısa İş Merkezi No:37/15 50100",
    },
  ],
  companies: [
    { id: 1, link: "/tours", title: "Turlar" },
    { id: 2, link: "/destinations", title: "Hedef Noktalar " },
    { id: 3, link: "/news", title: "Haberler" },
    { id: 4, link: "/about", title: "Hakkında" },
    { id: 5, link: "/contact", title: "İletişim" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
