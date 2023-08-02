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

export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}