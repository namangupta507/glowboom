import React from 'react'
import {HomeSlider} from './HomeSlider';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section6 } from './Section6';
import { Section8 } from './Section8';
import { Section9 } from './Section9';



export const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section8/>
      <Section9/>
    </div>
  )
}
