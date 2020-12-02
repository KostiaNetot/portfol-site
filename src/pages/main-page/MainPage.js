import React from 'react';
import './MainPage.css';
import main from './main.jpg';

export default function MainPage() {
    return (
        <div className="main-page row">

            <div className="text-column col-xs-12 col-sm-6">
              <div className="text-wrapper w-50">
                <h6 className="mb-11 text-uppercase">Hello, I am</h6>
                <h1 className="mb-30 text-uppercase">Kostia Aleksieienko</h1>
                <h5 className="mb-11 font-16 line-height-28">React Developer</h5>
                <button type="button" className="btn btn-primary btn-lg">Contact</button>
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
