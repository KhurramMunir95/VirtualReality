import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Crafting Extraordinary VR Experiences with GPT-3 from OpenAI</h1>
      <p>However, avoid any displeasing indulgence while traveling. All exercises are considered a blessing, and altering joyful experiences is our priority. Over the years, we've been asked to allow for enjoyment at our gatherings.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
