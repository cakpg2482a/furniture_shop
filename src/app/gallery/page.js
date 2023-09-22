"use client"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css";
import "./gallery.css";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Gallery() {
    let images = [
        { src: "/Rectangle 82 (1).png", alt: '', height: 400, width: 300 },
        { src: "/Rectangle 82 (2).png", alt: 'Image 2', height: 400, width: 300 },
        { src: "/Rectangle 82 (3).png", alt: 'Image 3', height: 400, width: 300 },
        { src: "/Rectangle 82.png", alt: 'Image 4', height: 400, width: 300 },
    ];
    return (<>
        <div style={{ height: "100%", width: "99%", backgroundColor: "#ffffff" }}>
            <div className="a">
                <div className="gg1" >
                    <p className="gallery-1" align="center" >Gallery</p>
                </div>
            </div>
             <div className="image-carousel">
                  <div className="image-gallery">
                    {images.map((im, index) => (
                        <div  key={index}>
                            <Image  src={im.src} alt={im.alt} height={im.height} width={im.width} />
                          </div> 
                    ))};
                        </div>

                {/* Carousel View (Hidden on larger screens) */ }
                        < div className = "image-carousel-carousel" >

                        <Carousel showArrows={true} showThumbs={false}>

                            {images.map((image, index) => (
                                <div  key={index}>
                                    <Image class="rectangle-91" src={image.src} alt={image.alt} height={500} width={250} />
                                </div>
                            ))}
                        </Carousel>
              
            </div>
        </div>

</div>

    </>
)
}
