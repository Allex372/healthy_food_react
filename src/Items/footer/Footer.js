import React from "react";
import './footer.css';
import img1 from '../../img/header/615px-Food_Network_New_Logo 2.png';
import logo1 from '../../img/footer/Group (2).png';
import logo2 from '../../img/footer/Vector (5).png';
import logo3 from '../../img/footer/Vector (6).png';
import logo4 from '../../img/footer/Vector (7).png';


function Footer () {
  return(
      <div className='footer-main'>
          <div className='footer-wrapper'>
              <div>
                  <img src={img1}/>
                  <p className='footer-p margin25'>www.company name.com</p>
                  <p className='footer-p margin17'>companyname@gmail.com</p>
                  <p className='footer-p margin17'>Phone: +7 485-118-03-25</p>

              </div>
              <div>
                  <p className='footer-p cappital'>Home</p>
                  <p className='footer-p margin17'>Landingpage</p>
                  <p className='footer-p margin17'>Documentation</p>
                  <p className='footer-p margin17'>Referral Program</p>
                  <p className='footer-p margin17'>UI & UX Design</p>
                  <p className='footer-p margin17'>Web Design</p>
              </div>
              <div>
                  <p className='footer-p cappital'>Menu</p>
                  <p className='footer-p margin17'>Landingpage</p>
                  <p className='footer-p margin17'>Documentation</p>
                  <p className='footer-p margin17'>Referral Program</p>
                  <p className='footer-p margin17'>UI & UX Design</p>
                  <p className='footer-p margin17'>Web Design</p>
              </div>
              <div>
                  <p className='footer-p cappital'>Menu</p>
                  <p className='footer-p margin17'>Landingpage</p>
                  <p className='footer-p margin17'>Documentation</p>
                  <p className='footer-p margin17'>Referral Program</p>
                  <div className='footer-row'>
                      <div className='circle purple'>
                          <img src={logo1}/>
                      </div>
                      <div className='circle blue'>
                          <img src={logo2}/>
                      </div>
                      <div className='circle blue-light'>
                          <img src={logo3}/>
                      </div>
                      <div className='circle red'>
                          <img src={logo4}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Footer;
