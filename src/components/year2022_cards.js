import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function _y2022() {
  return (
    <div className='cards'>
      <h1>Trends that define 2022</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/catsuit.jpg'
              text="The catsuit is one of the year's most unexpected trends to emerge. But lest you relegate it to runway only (as seen multiple times on Saint Laurent's and at Burberry)—know that everyone from Hailey Bieber to Lizzo has already worn it out in the wild. It's like your favorite yoga one-piece got a sudden after-dark update."
              label='catsuits'
              path='/year2022'
            />
            <CardItem
              src='images/cargo.jpg'
              text='Camo print was everywhere circa 2017, but this year, it kind of goes hand-in-hand with neutral colors. On this, Catherine Morrissey, president of White + Warren, tells Marie Claire, camo "is a fantastic non-print print that functions like a neutral. It adds interest without being overpowering." The same, according to Marie Claire, applies to animal print.
               Ultimately, 2022 is all about being overpowering, and camo might not provide this message in the ways that some may want.'
              label='The cargo nostalgia'
              path='/year2022'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/peplum.jpeg'
              text="Since looks from the 2010s have made a comeback in 2020 (color-blocking, for example), you might be wondering about the love-it-or-hate-it peplum trend we put behind us in the previous decade. While peplums are taking their time reappearing into the cycle and aren't quite back yet in 2022, we may be seeing them slowly crawling in for their return.

              'I think there is something to be said about women historically using peplum as a way to create that hourglass silhouette,' explains textile conservator Margaret O'Neill (via Refinery29). For now, though, peplum remains out of style."
              label='Peplum'
              path='/year2022'
            />
            <CardItem
              src='images/hotgoth.jpg'
              text='Let the icy specter envelop you in its shadowy grasp. Become a demon of the night, a being born of unholy miasma.
              Your very footsteps desecrate the ground under your feet. You have become a creature of the void, an acolyte of the malevolent.
              A blackened aura dims the sunlight around you. The pious avert their gaze; they secretly wish they could be so bad but look so good.When we think about alternative fashion, gothic clothing is almost always the first thing to mind.
              Part of the early alternative subculture, gothic clothes are a cornerstone of the scene, with ‘the blackest of the black and the darkest of the dark’ at heart.
              However, you do not have to be the ‘baddest’ witch in the coven or in love with the prince of darkness to wear hot goth apparel in 2022.
              After a boring 2021, you’re entitled to be both decadent and sulky, climbing into a hot gothic slip dress, bringing not drama but a darker style to your daywear outfit.'
              label='The dead and sulky hot goth'
              path='/year2022'
            />
            <CardItem
              src='images/sheer.jpg'
              text="Sheer isn't exclusive to summer. In fact, according to wardrobe stylist Chellie Carlson, clients have been loving the lightweight, see-through fabric heading into autumn.

              'Sheer garments make for a perfect layering piece. A statement bra under a sheer blouse is sexy yet classy and the perfect way to spice up date night or dinner with the girls,' says Carson. 'Sheer items also allow you to show a little skin while still being covered for those colder months.'"
              label='Sheer trend'
              path='/year2022'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default _y2022;
