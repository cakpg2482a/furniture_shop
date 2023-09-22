import Image from "next/image"
import "./home.css"
import profile from "./images/Rectangle 25.jpg"
import profile1 from "./images/Rectangle 64.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../product/page"
import Gallery from "../gallery/page"
import About from "../about/page"
import Contact from "../contact/page";
import Calendar from "../calendar/calendar";



export default function Home() {
    return (
        <>
        <div className="maindiv">
         
           <Image className="rectangle-25"
                src={profile}
                alt="Picture of the author"
                // layout="responsive"
                height={450}
                // width={1200}
              
            />
          
            
           <Image class="rounded mx-auto d-block " 
               src={profile1}
               alt="Picture of the author"
             
            />
        
        </div>

          <About/>
          <Product/>
          <Gallery/>
          <Calendar/> 
          <Contact/>
      
      
          
          
          </>
    )
}