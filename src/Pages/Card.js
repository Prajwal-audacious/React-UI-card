import card from "../Pages/Card.module.css";
import React from "react";
import Temp from '../components/temp'

const Card = () => {
  return (
    <>
      <div className={card.box}>
      <div className={card.container}>
        <div className={card.wrapper}>
          <div className={card.sub_tag}>Subscriptions</div>
          <div className={card.content}>
            <p className={card.content_text}>
              Support these creators by purchasing their monthly subscriptions,
              and get access to premium content
            </p>
          </div>
          <div className={card.logo_wrapper}>
            <div className={card.logo}><i class="fa-solid fa-paperclip"></i>Source files</div>
            <div className={card.logo}>Live streams</div>
            <div className={card.logo}><i class="fa-regular fa-calendar"></i>Meetup</div>
          </div>
        </div>
        <div className={card.profile}>
            <Temp name="Ludawig Lagos" title="Illustrator"/>
            <Temp name="Nina Valantine" title="3D artist"/>
            <Temp name="Krolina" title="Illustrator"/>
            {/* <Temp/> */}
            {/* <Temp/> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
