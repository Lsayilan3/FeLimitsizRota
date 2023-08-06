import React from "react";

const GoogleMap = () => {
  return (
    <section className="contact-page-google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.6283767658547!2d34.7082421155952!3d38.63442947000623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6e40d70a0ddf%3A0x76af4fe6426c94e0!2sBah%C3%A7elievler%2C%20Toptanc%C4%B1lar%20Sitesi%2C%2050200%20Nev%C5%9Fehir%20Merkez%2FNev%C5%9Fehir!5e0!3m2!1str!2str!4v1659701052391!5m2!1str!2str"
        className="contact-page-google-map__one"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
