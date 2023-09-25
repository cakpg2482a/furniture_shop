import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css"
import Link from 'next/link';
import instagram from "../../../public/button-icon/uil_instagram.svg";
import facebook from "../../../public/button-icon/bxl_facebook.svg";
import whatsapp from "../../../public/button-icon/ic_outline-whatsapp.svg";
import Youtube from "../../../public/button-icon/ri_youtube-line.svg";




export default function About() {
    return (
    <>
 <div style={{height:"100%",width:"100%",backgroundColor:"#ffffff"}}>
        <div className="container11">
            <h3 className="heading1">Furniture</h3>
               <p className="heading11">Furniture can be a product of design and <br/>can be considered a form of decorative art.<br/> In addition to functional role,<br/> it can serve a symbolic or religious purpose. </p>
        </div>
        {/* .................... */}
        <div className="btn">
          <button class="rectangle-100" >
          <Link href=""target="_blank"style={{textDecoration:"none"}}>
            <svg class="material-symbols-call-sharp" width="42" height="42"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.9125 36.75C31.2667 36.75 27.6576 35.9625 24.0852 34.3875C20.5129 32.8125 17.2678 30.5667 14.35 27.65C11.4333 24.7333 9.1875 21.4958 7.6125 17.9375C6.0375 14.3792 5.25 10.7625 5.25 7.0875V5.25H15.575L17.1937 14.0437L12.2062 19.075C12.8479 20.2125 13.5625 21.2917 14.35 22.3125C15.1375 23.3333 15.9833 24.2812 16.8875 25.1562C17.7333 26.0021 18.6597 26.8117 19.6665 27.5852C20.6733 28.3587 21.7595 29.0803 22.925 29.75L28 24.675L36.75 26.4688V36.75H34.9125Z" fill="white" />
            </svg>
            <div class="phone-number">phone number </div>
            <div class="_91-90000-80000" >+91 90000-80000 </div>
            </Link>
          </button>
        {/* ...................................................... */}

        <button class="rectangle-101" >
        <Link href="https://gmail.com/"target="_blank"style={{textDecoration:"none"}}>
            <div class="tabler-mail-filled" >
                <svg class="group" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.5 13.1863V29.75C38.5001 31.0891 37.9884 32.3777 37.0698 33.352C36.1511 34.3263 34.8948 34.9127 33.558 34.9913L33.25 35H8.75C7.41088 35.0001 6.12235 34.4885 5.14804 33.5698C4.17374 32.6511 3.58731 31.3948 3.50875 30.058L3.5 29.75V13.1863L20.0287 24.206L20.2318 24.3215C20.471 24.4384 20.7337 24.4992 21 24.4992C21.2663 24.4992 21.529 24.4384 21.7682 24.3215L21.9713 24.206L38.5 13.1863Z" fill="white" />
                    <path d="M33.25 7C35.14 7 36.7972 7.9975 37.7212 9.49725L21 20.6447L4.27875 9.49725C4.71753 8.78459 5.32037 8.1872 6.03699 7.75492C6.7536 7.32264 7.5632 7.068 8.39825 7.01225L8.75 7H33.25Z" fill="white" />
                </svg>
            </div>
            <div class="email-id" >email id </div>
            <div class="tim-jennings-example-com" >jennings@exa.com </div>
           </Link>
        </button>

        {/* ............... */}


        <button class="rectangle-102" >
        <Link href=""target="_blank"style={{textDecoration:"none"}}>
            <svg class="ph-line-segments-fill" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1519 12.8986C38.6648 13.3873 38.0858 13.7748 37.4484 14.0389C36.8109 14.3031 36.1275 14.4385 35.4375 14.4375C35.0152 14.4373 34.5944 14.3866 34.1841 14.2866L29.8151 22.4011C29.8643 22.447 29.9135 22.493 29.9611 22.5405C30.6553 23.2349 31.1408 24.11 31.3626 25.0664C31.5844 26.0229 31.5336 27.0224 31.2158 27.9514C30.8981 28.8804 30.3262 29.7017 29.5651 30.322C28.804 30.9423 27.8843 31.3367 26.9103 31.4605C25.9363 31.5843 24.9471 31.4325 24.055 31.0223C23.1629 30.6121 22.4038 29.96 21.8638 29.14C21.3238 28.32 21.0245 27.365 21 26.3835C20.9755 25.4019 21.2267 24.4332 21.7252 23.5873L18.4144 20.2765C17.6067 20.751 16.6868 21.0008 15.75 21C15.3272 21.0003 14.9059 20.9502 14.4949 20.8507L10.1259 28.9619C10.1752 29.0079 10.226 29.0538 10.2736 29.1014C11.0077 29.8357 11.5076 30.7711 11.7101 31.7895C11.9125 32.8079 11.8085 33.8634 11.4111 34.8226C11.0137 35.7819 10.3408 36.6018 9.47747 37.1786C8.61414 37.7554 7.59916 38.0633 6.56085 38.0633C5.52255 38.0633 4.50757 37.7554 3.64424 37.1786C2.7809 36.6018 2.108 35.7819 1.7106 34.8226C1.31321 33.8634 1.20917 32.8079 1.41164 31.7895C1.61412 30.7711 2.11401 29.8357 2.84812 29.1014C3.48689 28.4629 4.27957 28 5.14953 27.7575C6.01949 27.5149 6.93732 27.5009 7.81429 27.7167L12.1833 19.6022C12.1341 19.5562 12.0848 19.5103 12.0373 19.4627C11.5496 18.9752 11.1628 18.3964 10.8989 17.7594C10.635 17.1223 10.4991 16.4395 10.4991 15.75C10.4991 15.0604 10.635 14.3777 10.8989 13.7406C11.1628 13.1036 11.5496 12.5248 12.0373 12.0373C12.9405 11.1315 14.1433 10.5866 15.4199 10.505C16.6964 10.4234 17.9588 10.8107 18.97 11.594C19.9812 12.3774 20.6717 13.503 20.9116 14.7595C21.1516 16.0159 20.9245 17.3168 20.2732 18.4176L23.584 21.7284C24.7669 21.0353 26.1731 20.8294 27.5051 21.1542L31.8741 13.0397C31.8248 12.9937 31.774 12.9478 31.7264 12.9002C31.2388 12.4127 30.8519 11.8339 30.588 11.1969C30.3241 10.5598 30.1883 9.87703 30.1883 9.18749C30.1883 8.49795 30.3241 7.81516 30.588 7.17812C30.8519 6.54109 31.2388 5.96228 31.7264 5.47475C32.7111 4.49008 34.0466 3.93689 35.4391 3.93689C36.8317 3.93689 38.1672 4.49008 39.1519 5.47475C40.1365 6.45943 40.6897 7.79494 40.6897 9.18749C40.6897 10.58 40.1365 11.9155 39.1519 12.9002V12.8986Z" fill="white" />
            </svg>
            <div class="business-segment">Business Segment </div>
            <div class="furniture123" >furniture </div>
            </Link>
        </button>

        {/* ................... */}
        <button className="rectangle-103" >

        <Link href="https://www.google.com/maps"target="_blank"style={{textDecoration:"none"}}>
            <svg class="fluent-location-16-filled" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0345 38.178C28.6099 34.1512 36.75 25.9245 36.75 18.375C36.75 14.1978 35.0906 10.1918 32.1369 7.23807C29.1832 4.28437 25.1772 2.625 21 2.625C16.8228 2.625 12.8168 4.28437 9.86307 7.23807C6.90937 10.1918 5.25 14.1978 5.25 18.375C5.25 25.9245 13.3875 34.1512 17.9655 38.178C18.8005 38.9233 19.8807 39.3353 21 39.3353C22.1193 39.3353 23.1995 38.9233 24.0345 38.178ZM15.75 18.375C15.75 16.9826 16.3031 15.6473 17.2877 14.6627C18.2723 13.6781 19.6076 13.125 21 13.125C22.3924 13.125 23.7277 13.6781 24.7123 14.6627C25.6969 15.6473 26.25 16.9826 26.25 18.375C26.25 19.7674 25.6969 21.1027 24.7123 22.0873C23.7277 23.0719 22.3924 23.625 21 23.625C19.6076 23.625 18.2723 23.0719 17.2877 22.0873C16.3031 21.1027 15.75 19.7674 15.75 18.375Z" fill="white" />
            </svg>
            <div class="location">location </div>
            <div class="_2972-westheimer-rd-santa-ana-illinois-85486" >2972 Westheimer
             </div>
             </Link>
        </button>
        </div>

        <br/>


           


<div className="container align-items-center justify-content-center d-flex mt-5">
      <div className="row gap-2">
        <div className="col">
          <Link href="https://www.instagram.com/"target="_blank">
            <button className="button">
              <Image src={instagram} alt="Instagram" className="icon" />
            </button>
          </Link>
        </div>
        <div className="col">
          <Link href="https://www.facebook.com/"target="_blank">
            <button className="button">
              <Image src={facebook} alt="Facebook" className="icon" />
            </button>
          </Link>
        </div>
        <div className="col">
          <Link href="https://www.whatsapp.com/"target="_blank">
            <button className="button">
              <Image src={whatsapp} alt="WhatsApp" className="icon" />
            </button>
          </Link>
        </div>
        <div className="col">
          <Link href="https://www.youtube.com/"target="_blank">
            <button className="button">
              <Image src={Youtube} alt="YouTube" className="icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
            </div>  
    </>
    )
}