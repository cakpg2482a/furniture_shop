"use client"
import React from 'react';
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css"
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Product() {
    let images = [
        { src: "/Rectangle 78.png", alt: '', height: 500, width: 300 },
        { src: "/Rectangle 75.png", alt: 'Image 2', height: 500, width: 300 },
        { src: "/Rectangle 72.png", alt: 'Image 3', height: 500, width: 300 },
        { src: "/Rectangle 69.png", alt: 'Image 4', height: 500, width: 300 },
    ];
    return (<>

        <div style={{ height: "100%", width: "100%", backgroundColor: "#ffffff" }}>
            <div className="a">
                <div class="rectangle-92" alignItems='center' align="center" >
                    <p class="our-product" >Our Product</p>
                </div>
            </div>
            <div className="image-carousel">
                {/* Gallery View */}
                <div className="image-gallery">
                    {images.map((im, index) => (
                        <div className="rectangle-90" key={index}>
                            <Image class="rectangle-91" src={im.src} alt={im.alt} height={im.height} width={im.width} />
                            <div className="card-body">

                                <div class="furniture" >Furniture</div>

                                <svg class="bx-rupee" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 6V4H6V6H9.5C10.802 6 11.901 6.838 12.315 8H6V10H12.315C12.1097 10.5832 11.7289 11.0886 11.2249 11.4467C10.7208 11.8048 10.1183 11.9981 9.5 12H6V14.414L11.586 20H14.414L8.414 14H9.5C10.652 13.9985 11.7682 13.5998 12.6604 12.8711C13.5526 12.1424 14.1663 11.1284 14.398 10H17V8H14.398C14.2447 7.2722 13.9288 6.58848 13.474 6H17Z" fill=" #31343c" />
                                </svg>

                                <div class="_2000-00" >2000.00 </div>

                                <div class="ellipse-17" >

                                <Link href="https://api.whatsapp.com/send?phone=8770959967&text=Hello" target="_blank">
                                       <svg class="logos-whatsapp-icon" width="24px" height="25px" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_210)">
                                                <path d="M0.512151 11.949C0.511588 13.9812 1.04259 15.9655 2.05228 17.7145L0.415588 23.6903L6.53109 22.0868C8.22255 23.0077 10.1177 23.4902 12.0436 23.4903H12.0487C18.4063 23.4903 23.5816 18.3169 23.5843 11.9581C23.5855 8.87681 22.3867 5.97937 20.2085 3.7995C18.0307 1.61981 15.1342 0.41878 12.0482 0.417374C5.68978 0.417374 0.51487 5.5905 0.512245 11.949" fill="url(#paint0_linear_1_210)" />
                                                <path d="M0.100313 11.9452C0.0996563 14.0506 0.649687 16.1059 1.69537 17.9175L0 24.1075L6.33478 22.4466C8.08022 23.3982 10.0454 23.9 12.0451 23.9007H12.0502C18.636 23.9007 23.9972 18.5412 24 11.9548C24.0011 8.76281 22.7591 5.76122 20.5031 3.50325C18.2468 1.24556 15.2468 0.0013125 12.0502 0C5.46337 0 0.102938 5.35875 0.100313 11.9452ZM3.87281 17.6055L3.63628 17.23C2.64197 15.649 2.11716 13.822 2.11791 11.946C2.12006 6.47147 6.57544 2.0175 12.054 2.0175C14.7071 2.01863 17.2005 3.05288 19.0759 4.92938C20.9512 6.80606 21.9831 9.30075 21.9824 11.9541C21.98 17.4286 17.5245 21.8831 12.0502 21.8831H12.0463C10.2638 21.8822 8.51569 21.4035 6.99113 20.4989L6.62831 20.2838L2.86912 21.2693L3.87281 17.6054V17.6055Z" fill="url(#paint1_linear_1_210)" />
                                                <path d="M9.06357 6.95137C8.83988 6.45422 8.60448 6.44419 8.39176 6.43547C8.21757 6.42797 8.01844 6.42853 7.81951 6.42853C7.62038 6.42853 7.29685 6.50344 7.02338 6.80203C6.74963 7.1009 5.97826 7.82315 5.97826 9.29212C5.97826 10.7612 7.04823 12.1808 7.19738 12.3802C7.34673 12.5793 9.26297 15.6903 12.2978 16.8871C14.8201 17.8817 15.3334 17.6839 15.8808 17.634C16.4283 17.5843 17.6474 16.9119 17.8961 16.2147C18.145 15.5176 18.145 14.92 18.0704 14.7952C17.9958 14.6707 17.7967 14.596 17.4981 14.4468C17.1994 14.2974 15.7314 13.5751 15.4578 13.4754C15.184 13.3759 14.985 13.3262 14.7859 13.6252C14.5868 13.9237 14.015 14.596 13.8407 14.7952C13.6666 14.9947 13.4923 15.0196 13.1938 14.8702C12.895 14.7204 11.9334 14.4055 10.7926 13.3884C9.90497 12.597 9.30572 11.6197 9.13154 11.3207C8.95735 11.0222 9.11288 10.8604 9.2626 10.7116C9.39676 10.5778 9.56129 10.3629 9.71072 10.1887C9.8596 10.0143 9.90929 9.88987 10.0089 9.69075C10.1085 9.49144 10.0586 9.31706 9.9841 9.16772C9.90929 9.01837 9.32907 7.54172 9.06357 6.95137Z" fill="white" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_1_210" x1="1158.85" y1="2327.71" x2="1158.85" y2="0.417374" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1FAF38" />
                                                    <stop offset="1" stop-color="#60D669" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1_210" x1="1200" y1="2410.75" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#F9F9F9" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                                <clipPath id="clip0_1_210">
                                                    <rect width="24" height="24.1875" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>

                {/* Carousel View (Hidden on larger screens) */}
                <div className="image-carousel-carousel">

                    <Carousel showArrows={true} showThumbs={false}>

                        {images.map((image, index) => (
                            <div key={index}>
                                <Image class="rectangle-91" src={image.src} alt={image.alt} height={500} width={250} />
                                <div className="card-body">
                                    <div class="furniture" >Furniture</div>

                                    <svg style={{ backgroundColor: "#31343c" }} class="bx-rupee" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 6V4H6V6H9.5C10.802 6 11.901 6.838 12.315 8H6V10H12.315C12.1097 10.5832 11.7289 11.0886 11.2249 11.4467C10.7208 11.8048 10.1183 11.9981 9.5 12H6V14.414L11.586 20H14.414L8.414 14H9.5C10.652 13.9985 11.7682 13.5998 12.6604 12.8711C13.5526 12.1424 14.1663 11.1284 14.398 10H17V8H14.398C14.2447 7.2722 13.9288 6.58848 13.474 6H17Z" fill="white" />
                                    </svg>

                                    <div class="_2000-00" >2000.00 </div>

                                    <div class="ellipse-17" >

                                        <Link href="https://api.whatsapp.com/send?phone=8770959967&text=Hello" target="_blank">
                                            <svg className="logos-whatsapp-icon" style={{ marginLeft: 2, backgroundColor: "green", borderRadius: "500px", cursor: "pointer" }} width="24px" height="25px" viewBox="0 0 24 25" fill="green" xmlns="http://www.w3.org/2000/svg" >
                                                <g clip-path="url(#clip0_1_210)">
                                                    <path d="M0.512151 11.949C0.511588 13.9812 1.04259 15.9655 2.05228 17.7145L0.415588 23.6903L6.53109 22.0868C8.22255 23.0077 10.1177 23.4902 12.0436 23.4903H12.0487C18.4063 23.4903 23.5816 18.3169 23.5843 11.9581C23.5855 8.87681 22.3867 5.97937 20.2085 3.7995C18.0307 1.61981 15.1342 0.41878 12.0482 0.417374C5.68978 0.417374 0.51487 5.5905 0.512245 11.949" fill="url(#paint0_linear_1_210)" />
                                                    <path d="M0.100313 11.9452C0.0996563 14.0506 0.649687 16.1059 1.69537 17.9175L0 24.1075L6.33478 22.4466C8.08022 23.3982 10.0454 23.9 12.0451 23.9007H12.0502C18.636 23.9007 23.9972 18.5412 24 11.9548C24.0011 8.76281 22.7591 5.76122 20.5031 3.50325C18.2468 1.24556 15.2468 0.0013125 12.0502 0C5.46337 0 0.102938 5.35875 0.100313 11.9452ZM3.87281 17.6055L3.63628 17.23C2.64197 15.649 2.11716 13.822 2.11791 11.946C2.12006 6.47147 6.57544 2.0175 12.054 2.0175C14.7071 2.01863 17.2005 3.05288 19.0759 4.92938C20.9512 6.80606 21.9831 9.30075 21.9824 11.9541C21.98 17.4286 17.5245 21.8831 12.0502 21.8831H12.0463C10.2638 21.8822 8.51569 21.4035 6.99113 20.4989L6.62831 20.2838L2.86912 21.2693L3.87281 17.6054V17.6055Z" fill="url(#paint1_linear_1_210)" />
                                                    <path d="M9.06357 6.95137C8.83988 6.45422 8.60448 6.44419 8.39176 6.43547C8.21757 6.42797 8.01844 6.42853 7.81951 6.42853C7.62038 6.42853 7.29685 6.50344 7.02338 6.80203C6.74963 7.1009 5.97826 7.82315 5.97826 9.29212C5.97826 10.7612 7.04823 12.1808 7.19738 12.3802C7.34673 12.5793 9.26297 15.6903 12.2978 16.8871C14.8201 17.8817 15.3334 17.6839 15.8808 17.634C16.4283 17.5843 17.6474 16.9119 17.8961 16.2147C18.145 15.5176 18.145 14.92 18.0704 14.7952C17.9958 14.6707 17.7967 14.596 17.4981 14.4468C17.1994 14.2974 15.7314 13.5751 15.4578 13.4754C15.184 13.3759 14.985 13.3262 14.7859 13.6252C14.5868 13.9237 14.015 14.596 13.8407 14.7952C13.6666 14.9947 13.4923 15.0196 13.1938 14.8702C12.895 14.7204 11.9334 14.4055 10.7926 13.3884C9.90497 12.597 9.30572 11.6197 9.13154 11.3207C8.95735 11.0222 9.11288 10.8604 9.2626 10.7116C9.39676 10.5778 9.56129 10.3629 9.71072 10.1887C9.8596 10.0143 9.90929 9.88987 10.0089 9.69075C10.1085 9.49144 10.0586 9.31706 9.9841 9.16772C9.90929 9.01837 9.32907 7.54172 9.06357 6.95137Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <linearGradient style={{ color: "#31343c" }} id="paint0_linear_1_210" x1="1158.85" y1="2327.71" x2="1158.85" y2="0.417374" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#31343c" />
                                                        <stop offset="1" stop-color="#31343c" />
                                                    </linearGradient>
                                                    <linearGradient style={{ color: "red" }} id="paint1_linear_1_210" x1="1200" y1="2410.75" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#31343c" />
                                                        <stop offset="1" stop-color="black" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_1_210">
                                                        <rect width="24" height="24.1875" fill="black" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div></>)
}