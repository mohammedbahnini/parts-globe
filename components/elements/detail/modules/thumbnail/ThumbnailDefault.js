import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';
import Lightbox from 'react-image-lightbox';

class ThumbnailDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            photoIndex: 0,
            isOpen: false,
        };
    }

    handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        this.setState({ photoIndex: imageIndex, isOpen: true });
    };

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const { product } = this.props;
        const { photoIndex, isOpen } = this.state;
        const productImages = [];

        productImages.push(product.thumbnail);
        

        return (
            <div className="ps-product__thumbnail" data-vertical="true">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                           
                            <div className="item" key={product.thumbnail}>
                                <a
                                    href="#"
                                    onClick={e =>
                                        this.handleOpenLightbox(e, 0)
                                    }>
                                    <img src={product.thumbnail} alt="" />
                                </a>
                            </div>
                        
                        </Slider>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={slider => (this.slider2 = slider)}
                    swipeToSlide={true}
                    arrows={false}
                    slidesToShow={3}
                    vertical={true}
                    focusOnSelect={true}
                    className="ps-product__variants">
          
                    <div className="item" key={product.thumbnail}>
                        <img src={product.thumbnail} alt="" />
                    </div>
                   
                </Slider>
                {isOpen && (
                    <Lightbox
                        mainSrc={productImages[photoIndex]}
                        nextSrc={
                            productImages[
                                (photoIndex + 1) % productImages.length
                            ]
                        }
                        prevSrc={
                            productImages[
                                (photoIndex + productImages.length - 1) %
                                    productImages.length
                            ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + productImages.length - 1) %
                                    productImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + 1) % productImages.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default ThumbnailDefault;
