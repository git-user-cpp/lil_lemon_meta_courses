import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

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

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}