import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Serve_cards() {
  return (
    <div className='cards'>
      <h1>The Most Exotic trends of 2020</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/vicsle.jpg'
              text='Take it back to the 19th century with the Victorian-inspired sleeves. Its oversized shape creates the illusion of a slimmer waist and adds an instant feminine touch to your ensemble. 
              Opt for soft colors during spring, or unleash your inner gothic princess in black or grey. 
              It is also a great time to pull out your vintage ‘80s puff sleeve looks – it’s a style that keeps coming back!'
              label='Oversized Victorian Sleeves'
              path='/services'
            />
            <CardItem
              src='images/crochet.jpg'
              text='The seventies are still an inexhaustible source of inspiration for fashion as we know it. Crochet is one proof of that. The crocheted fabric will get a fresh update in 2020. 
              With Fendi, crochet looks more modern than ever, in tight skirts and tailored shirts. Isabel Marant, on the other hand, pays homage to the hippie movement, with casual crochet tops with playful motifs.
               With Acne, crochet has a completely different look, casual and tough in the form of irregular and asymmetrical crocheted.'
              label='bringing back the grandma crochet style'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/collars.jpg'
              text="Disco is dead? Not if we can believe the catwalk trends for spring / summer 2020.
              The 'seventies collar' or 'disco collar' made a comeback with, among others, Louis Vuitton, Fendi, Victoria Beckham, Marc Jacobs, Saint Laurent and Acne. 
              You can recognize it by the flared points and is often worn over the collar of a contrasting blazer or sweater. Because the disco collar can be seen."
              label='The disco collar returns'
              path='/services'
            />
            <CardItem
              src='images/bermuda.jpg'
              text='With this trend you play safe this summer, this trend is literally everyone. 
              We already saw the bermuda at many influencers during fashion weeks, but this season it is popping up everywhere. Chloe , Sportmax and Bottega Veneta show how you can best wear this trend: cool, minimalist or business.'
              label='The comfy bermuda style'
              path='/services'
            />
            <CardItem
              src='images/colourleather.jpg'
              text='Against all vegan trends, we have never seen so much leather on the catwalk as last fashion weeks. Hermès dressed almost the entire parade in leather, from long trousers to trench coats and dresses. 
              Bottega Veneta is also known for its beautiful minimalist designs in quilted leather in fresh colors (think of The Pouch and slippers). 
              This summer the light blue trench coat is high on our wish list. You can find a nice vegan alternative to leather at Nanushka or Stella McCartney.'
              label='coloured leather'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Serve_cards;
