import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import Banner from "./../components/banner/Banner"
import img from "./../assets/images/4.jpg"

const Contact = () => {
  return (
   
    
        <ParallaxProvider>
         <Banner>
        <ParallaxBanner
      layers={[{ image: img, speed: -15 },
    
    ]}
      
      className="aspect-[2/1]"
      style={{height: "500px", width: "100%"}}
      
    />
    </Banner>
    </ParallaxProvider>

  )
}

export default Contact