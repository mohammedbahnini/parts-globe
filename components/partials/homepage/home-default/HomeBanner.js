import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import Link from 'next/link';

class HomeBanner extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-home-banner ps-home-banner--1">
                <div className="ps-container">
                    
                        <div className="ps-section__left">
                        <Slider {...carouselSetting} className="ps-carousel">

                            <div className="ps-banner">
                                    <Link href="/shop">
                                        <a>
                                            <img
                                                src="/static/img/slider/home-1/slide-7.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>

                            <div className="ps-banner">
                                <Link href="/shop">
                                    <a>
                                        <img
                                            src="/static/img/slider/home-1/slide-8.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>

                            <div className="ps-banner">
                                    <Link href="/shop">
                                        <a>
                                            <img
                                                src="/static/img/slider/home-1/slide-6.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                                
                                <div className="ps-banner">
                                    <Link href="/shop">
                                        <a>
                                            <img
                                                src="/static/img/slider/home-1/slide-4.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="ps-banner">
                                    <Link href="/shop">
                                        <a>
                                            <img
                                                src="/static/img/slider/home-1/slide-5.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                                
                            
                            </Slider>

                        </div>

                        <div className="ps-section__right">
                            <Link href="/shop">
                                <a className="ps-collection">
                                    <img
                                        src="/static/img/slider/home-1/promotion-1.jpg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="/shop">
                                <a className="ps-collection">
                                    <img
                                        src="/static/img/slider/home-1/promotion-2.jpg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                
                  
                </div>
            </div>
        );
    }
}

export default HomeBanner;
