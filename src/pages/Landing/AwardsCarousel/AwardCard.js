import React from "react";
import "./AwardCard.css";
function AwardCard({ title, subtitle, held, delegates, representatives, img }) {
  return (
    <div className="awardCard">
      <div className="awardCard__image">
        <img src={img} alt="" />
      </div>
      <div className="awardCard__body">
        <div className="awardCard__info">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
          <p>{held}</p>
        </div>
        <div className="awardCard__footer">
          {delegates && (
            <div>
              <h5>Delegates:</h5>
              {delegates.map((delegate) => (
                <p>{delegate}</p>
              ))}
            </div>
          )}
          {representatives && (
            <div>
              <h5>Representatives:</h5>
              {representatives.map((representative) => (
                <p>{representative}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AwardCard;
