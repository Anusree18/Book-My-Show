import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";

//configs
import PosterCarousalSettings from "../../config/PosterCarousel.config";

export const Premier = () => {      
      const PremierImages = [
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
        {       
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",       
            alt: "zack",       
            title: "Zacl",       
            subtitle: "english",    
        },
      ];
    return(
    <>
    <div className="flex flex-col items-start">
    <h3 className="text-white text-xl font-bold">Premires</h3>
    <p className="text-white text-sm">Band new release every friday</p>
    </div>

     <Slider {...PosterCarousalSettings}>
      {PremierImages.map((image) => (
        <Poster {...image} isDark />)
    )};
     </Slider>
    </>
);
};

export default Premier;