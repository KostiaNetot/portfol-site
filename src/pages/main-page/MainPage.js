import React from 'react';
import './MainPage.css';
import main from './main.png';

export default function MainPage() {
    return (
        <div className="main-page row">

            <div className="text-column col-xs-12 col-sm-6">
              <div className="text-wrapper w-50">
                <h6 className="mb-11 text-uppercase">Hello, I am</h6>
                <h1 className="mb-30 text-uppercase">Kostia Aleksieienko</h1>
                <h5 className="mb-11 font-16 line-height-28">React Developer</h5>
                <blockquote className="blockquote">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <footer className="blockquote-footer">Some wise <cite title="Source Title">Qute</cite></footer>
                </blockquote>
              </div>
            </div>

            <div className="picture-column col-xs-12 col-sm-6">
              <div className="img-wrapper">
                <img src={main} alt="main-img"/>  
              </div>
            </div>    

        </div>
    )
}
