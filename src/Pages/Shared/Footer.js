import React from 'react';
import footer from './footer.css'
import snip from '../../img/snipshop-icon.png'
import fb from '../../img/fb.png'
import insta from '../../img/insta.png'
import twt from '../../img/twt.png'
import Path from '../../img/Path.png'
import ball from '../../img/ball.png'


const Footer = () => {
    return (
      <div className="footer-margin">
        <footer className="footer p-10 text-base-content">
          <div>
            <span className="font-bold text-lg text-white">Shop</span>
            <a className="link text-white link-hover">Gift Cards</a>
            <a className="link text-white link-hover">SnipShop blog</a>
          </div>
          <div>
            <span className="font-bold text-lg text-white">Sell</span>
            <a className="link link-hover text-white">Sell on SnipShop</a>
            <a className="link link-hover text-white">Tearms</a>
            <a className="link link-hover text-white">Forums</a>
            <a className="link link-hover text-white">Affiliates</a>
          </div>
          <div>
            <span className="font-bold text-lg text-white">About</span>
            <a className="link link-hover text-white">SnipShop, Inc.</a>
            <a className="link link-hover text-white">Policies</a>
            <a className="link link-hover text-white">Investors</a>
            <a className="link link-hover text-white">Careers</a>
            <a className="link link-hover text-white">Press</a>
            <a className="link link-hover text-white">Impact</a>
          </div>
          <div>
            <span className="font-bold text-lg text-white">Help</span>
            <a className="link link-hover text-white">Help center</a>
            <a className="link link-hover text-white">Trust and safety</a>
            <a className="link link-hover text-white">Privacy settings</a>
            <div className='flex p-2 border-white border rounded-full'>
                <img src={snip} alt="" />
                <span className='text-white ms-2'>Download the SnipShop App</span>
            </div>
            <div className='flex'>
                <img className='me-4' src={insta} alt="" />
                <img className='me-4' src={fb} alt="" />
                <img className='me-4' src={twt} alt="" />
                <img className='me-4' src={ball} alt="" />
                <img className='me-4' src={Path} alt="" />
            </div>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t text-base-content border-base-300 color-footer">
          <div className="items-center grid-flow-col">
            <p className='text-white md:ms-20'>
            &#169; 2021-2023 SnipShop.com
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4 md: me-20">
            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy</a>
            <a className="link link-hover text-white">Interest-based ads</a>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;