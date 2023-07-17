import { useState, useEffect } from "react";
import voss from "../images/Voss.jpg";
import voss2 from "../images/Voss2.jpg";
import kopecky from "../images/Kopecky.jpg";
import persico from "../images/Persico.jpg";
import VanVleuten from "../images/VanVleuten.jpg";
import VanVleuten2 from "../images/VanVleuten2.jpg";
import vollering from "../images/Vollering.jpg";

const LoadImages = () => {
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (imgArray) => {
    const promises = await imgArray.map((img, idx) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = img;
        image.onload = resolve();
        image.error = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    const imagesArray = [
      voss,
      voss2,
      kopecky,
      persico,
      VanVleuten,
      VanVleuten2,
      vollering,
    ];

    cacheImages(imagesArray);
  }, []);
  return (
    <div className="images">
     
    </div>
  )
};

export default LoadImages;
