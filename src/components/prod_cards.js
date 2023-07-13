import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Prod() {
  return (
    <div className='cards'>
      <h1> the state of fashion 2021 </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/vest.jpg'
              text='What was once reserved for the likes of Doug Funnie, Chandler Bing and deeply nerdy college professors became a cool wardrobe staple for everyone from Gen Z high schoolers to 40-year-old professionals. Yes, the sweater vest was definitely one of the more surprising trends of the year, but it was also one of our favorites. They’re supremely easy to wear, 
              flattering on everyone regardless of age or body type and come in a wide range of styles to fit any personality. We’d predicted the rise of the sweater vest back in 2020, but it was the explosion of one inexpensive black-and-white houndstooth vest on TikTok that truly launched this beloved knitwear trend. 
              And now we can’t imagine our sweater drawers without ‘em.'
              label='Sweater Vest'
              path='/products'
            />
            <CardItem
              src='images/drmartins.jpg'
              text='You could argue that the rise of the chunky combat boot started back in 2019 when Prada models stomped down the runway in lace-up boots adorned with their own mini ankle pouches. But it wasn’t until 2021 that classic lace-up Dr. Martens (and the many spin-offs they inspired) really became mainstream.
              The reason for the return? Partly because of their links to ‘90s grunge nostalgia and party because they’re just very stylish and functional shoes. 
              Over the past two years, folks have leaned very strongly into clothing that’s practical above all else, and these boots are exactly that. Multiple other lug-sole styles followed suit, like Chelsea boots (both mid-calf and ankle-height) and Wellies, followed by even more chunky footwear options like loafers and platform Mary Janes.'
              label='Dr. Martens And Other Lug-sole Boots'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/genderneutral.jpg'
              text='Unisex fashion is nothing new, but it has definitely become a more mainstream topic over the past year. General discussions about gender identity with regards to lots of topics, not just fashion, have become more prevalent in the media, and lots of brands have taken note by releasing genderless collections and more inclusive campaigns. 
              Celebrities also played a big part in helping combat the idea of “gender norms” with male stars like Harry Styles and Kid Cudi rocking dresses, skirts and pearl necklaces and female stars like Billie Eilish sporting oversize T-shirts and baggy shorts.
               At the end of the day, fashion should make you feel good regardless of who it was originally designed for. If it makes you happy, wear it.'
              label=' Gender Neutral Fashion'
              path='/products'
            />
            <CardItem
              src='images/y2k.jpg'
              text='Scarf tops, butterfly clips, nylon bags, one-shoulder tank tops, patterned pants, kitschy prints—all these 2000s must-haves and more came roaring back for a second spin in the spotlight, with somewhat mixed results. 
               Younger generations went gaga for the era’s bright colors and smile-inducing patterns, and many adults reveled in the chance to relive (or try for the first time) the trends their tween selves were most excited about. On the other hand, some were less enthused about the return of Juicy Couture tracksuits, Ed Hardy tees and low-rise jeans.
               Regardless, it’s impossible to ignore the major impact Y2K style had in 2021, with everyone from fast fashion brands like ASOS to high-end designers like Missoni taking inspiration from the turn of the century.'
              label='All-Out Y2k Nostalgia'
              path='/products'
            />
            <CardItem
              src='images/corset.jpg'
              text='Another trend that was popular with influencers and editors, but that failed to really stick around in the end was the corset top. The 2021 version of the trend, which we’ve seen make its way back into the zeitgeist a few times over the past five or so years, was perhaps the best one yet and featured more subtle nods to corsetry, like seaming down the bodice, square necklines and V-shape hems.
               Alas, we don’t see this trend making it big in 2022.
               As is the case for actual lingerie corsets, it’s difficult to find a mass-produced corset top that fits your exact body type well enough to look truly fabulous, and we’re just not willing to put in all the work to find one.'
              label=' Corset Tops'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Prod;
