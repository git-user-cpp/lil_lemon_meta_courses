import HeroImage from "../../assets/food/food5.jpeg";
import { Link } from "react-router-dom";

/*
   Copyright 2023 Andrew Kushyk

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
