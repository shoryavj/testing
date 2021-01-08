import React from "react";

function PromoHeader() {
  return (
    <>
      <div className="promoHeader">
        <div className="promoHeaderContent">
          <span className="promoH">Promo code: </span>
          <div className="promoBadge">hello30 </div>
          <div className="promoText">
            - save $30 - $10 off each of your first 3 tickets
          </div>
        </div>
      </div>
    </>
  );
}

export default PromoHeader;
