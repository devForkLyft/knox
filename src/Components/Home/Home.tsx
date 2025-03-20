import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";

const Home = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent === "true") {
      setShowCookieBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  return (
    <div>
      {/* Other components and content */}
      {showCookieBanner && (
        <Banner isVisible={true} onAccept={handleAcceptCookies} />
      )}
    </div>
  );
};

export default Home;
