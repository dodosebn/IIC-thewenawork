import React from 'react';
// import '../../style/InfoStyle.css'
import Slider from './slider/Slider';

import { FaGlobe, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from 'next/image';


const InfoOne = () => {
  return (
    <div className="main-content">
        <div className="section-container">
            <div className="section-header">
              <div className="header-content">
                <span>Interiors, Travel I I by The Spaces Team</span>
                    <h1>This new Mediterranean restaurant in Miami has Michelin cred</h1>
                    <p>Chef Michael White helms the kitchen at Mika in Coral Gables</p>
              </div>
            </div>
            <div  className='info-one-header-image'>
                <Image  src="/assets/images/temp/download.webp" alt="header-image" width={24} height={24} />
                <div className='header-image-info'>
                    <span>Photography: Pablo Enriquez</span>
                </div>
            </div>

            <div className="header-content-paragraph">
                <p>A recipient of six Michelin stars over his career, the American chef Michael White is a safe 
                    pair of hands in the kitchen. This fact, along with a burnished dining room in an olive-grove palette, is what makes Mika a boon to the tidy white streets of Coral Gables in Miami. The Riviera-inspired restaurant, with its menu of seafood pastas and crudos, is a new hub on Ponce de Leon Boulevard, a historic palm-lined artery through town with Mediterranean flavour.</p>
                <p>
                    The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three cascading crystal chandeliers.
                </p>
                <p>
                    The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three cascading crystal chandeliers.
                </p>
            </div>
        </div>
        <div className="section-container">
          <Slider/>
          
            <div className="header-content-paragraph">
                <p>A recipient of six Michelin stars over his career, the American chef Michael White is a safe 
                    pair of hands in the kitchen. This fact, along with a burnished dining room in an olive-grove palette, is what makes Mika a boon to the tidy white streets of Coral Gables in Miami. The Riviera-inspired restaurant, with its menu of seafood pastas and crudos, is a new hub on Ponce de Leon Boulevard, a historic palm-lined artery through town with Mediterranean flavour.</p>
                <p>
                    The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three cascading crystal chandeliers.
                </p>
                <p>
                    The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three cascading crystal chandeliers.
                </p>
            </div>
        </div>
        <div className="section-container">
          
           <div className="image-text-container">
           <div className="image-container-single">
                <Image src="assets/images/temp/sample-1.jpg" alt="home" width={24} height={24} />
                <span>Photography: Pablo Enriquez</span>
            </div>
            {/* <div className="image-container-single">
                <img src="assets/images/temp/sample-2.jpg" alt="home" />
                <span>Photography: Pablo Enriquez</span>
            </div>
            <div className="image-container-single">
                <img src="assets/images/temp/sample-3.jpg" alt="home" />
                <span>Photography: Pablo Enriquez</span>
            </div>
            <div className="image-container-single">
                <img src="assets/images/temp/sample-4.jpg" alt="home" />
                <span>Photography: Pablo Enriquez</span>
            </div> */}
           </div>
        </div>

        <div className="footerSection">
            <div className="footerinner">
              <p>Share this story</p>
              <div className="footer-icons">
             
                <div className="icon-container">
                <Image src="/assets/icons/x-icon-black.png" className="icon" alt="X" width={24} height={24} />
                  <span>X </span>
                </div>
                <div className="icon-container">
                  <FaInstagram className="icon"/>
                  <span>Instagram</span>
                </div>
                <div className="icon-container">
                  <FaTiktok className="icon"/>
                  <span>Tiktok</span>
                </div>
                <div className="icon-container">
                  <FaGlobe className="icon"/>
                  <a href="/"><span>Visit website</span></a>
                </div>
              </div>
            </div>
        </div>

        <div className="section-container">
            <div className="recommended-product-section">
              <h1>SUPPORT US BY BUYING ONE OF THESE PRODUCTS </h1>
              <div className="production-grid">
                <div className="product-container">
                  <Image src="assets/images/temp/sample-1.jpg" alt="product" width={24} height={24} />
                  <div className="product-text">
                    <span>Interiors, News</span>
                    <p>The cedar-clad hillside home is decidedly Canadian in style — woody</p>
                  </div>
                </div>
                <div className="product-container">
                  <Image src="assets/images/temp/sample-1.jpg" alt="product" width={24} height={24} />
                  <div className="product-text">
                    <span>Interiors, News</span>
                    <p>The cedar-clad hillside home is decidedly Canadian in style — woody</p>
                  </div>
                </div>
                <div className="product-container">
                  <Image src="assets/images/temp/sample-1.jpg" alt="product" width={24} height={24} />
                  <div className="product-text">
                    <span>Interiors, News</span>
                    <p>The cedar-clad hillside home is decidedly Canadian in style — woody</p>
                  </div>
                </div>
                <div className="product-container">
                  <Image src="assets/images/temp/sample-1.jpg" alt="product" width={24} height={24} />
                  <div className="product-text">
                    <span>Interiors, News</span>
                    <p>The cedar-clad hillside home is decidedly Canadian in style — woody</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

       
          <div className="cta-section">
            <h3>SHARE WITH A FRIEND OR LOVED ONE</h3>

           <form action="" className="form-container">
            <div className="dual-input-container">
              <div className="input-container">
                {/* <span>Enter your name</span> */}
                <input type="text" placeholder='Sender&apos;s name' />
              </div>
              <div className="input-container">
                {/* <span>Enter reciever's name</span> */}
                <input type="text" placeholder='Receiver&apos;s name' />
              </div>
            </div>
            <div className="input-container">
              {/* <span>Enter receiver's email address</span> */}
              <input type="email" placeholder='Receiver&apos;s email' />

            </div>

            <button className="form-btn">
              Send
            </button>
           </form>
          </div>

      </div>
  )
}

export default InfoOne;