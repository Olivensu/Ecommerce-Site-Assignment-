import React from 'react';
import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import camera from '../../img/camera.png'

const Slider = () => {
    
      return (
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false} swipeable={false} emulateTouch={false}>
      <div className="flex justify-center">
        {/* Product Card 1 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 1" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 1</h3>
            <p className="text-gray-500">Description of Product 1</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 2" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 2</h3>
            <p className="text-gray-500">Description of Product 2</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 3" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 3</h3>
            <p className="text-gray-500">Description of Product 3</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 4" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 4</h3>
            <p className="text-gray-500">Description of Product 4</p>
          </div>
        </div>
      </div>
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 1" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 1</h3>
            <p className="text-gray-500">Description of Product 1</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 2" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 2</h3>
            <p className="text-gray-500">Description of Product 2</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 3" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 3</h3>
            <p className="text-gray-500">Description of Product 3</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="max-w-sm mx-2 shadow-lg">
          <img src={camera} alt="Product 4" className="h-48 w-full object-cover rounded-t-lg" />
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-lg font-bold">Product 4</h3>
            <p className="text-gray-500">Description of Product 4</p>
          </div>
        </div>
      
    </Carousel>
      );
};

export default Slider;