import im1 from "../../../assets/images/tajmohol.jpg"
import im2 from "../../../assets/images/Home15.jpg"
import im3 from "../../../assets/images/pic3.jpg"
import im4 from "../../../assets/images/pic5.jpg"
import im5 from "../../../assets/images/bankok.jpg"
import im6 from "../../../assets/images/pic5.jpg"

const Banner = () => {
    return (
        <div>
            <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full lg:h-[500px]">
          <img src={im1} className="w-full rounded-xl" />
          <div className="absolute flex justify-start items-center rounded-xl transform h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525]">
            <div className="flex flex-col lg:pl-20 md:pl-10 pl-4">
              <div className="text-white">
                <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3 text-2">
                Discover <br />the World's <br /> Hidden Gems
                </h1>
                <p className="py-4">
                Discover hidden gems and create unforgettable memories with our travel guides
                </p>
              </div>
              <div>
                <button className="btn btn-error mr-4">Discover More</button>
                <button className="btn btn-active btn-neutral">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full lg:h-[500px]">
          <img src={im2} className="w-full rounded-xl" />
          <div className="absolute flex justify-start items-center rounded-xl transform h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525]">
            <div className="flex flex-col lg:pl-20 md:pl-10 pl-4">
              <div className="text-white">
                <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3 text-2">
                Explore Dream <br />
                Discover
                </h1>
                <p className="py-4">
                Your ultimate adventure starts here—explore the world with us
                </p>
              </div>
              <div>
                <button className="btn btn-error mr-4">Discover More</button>
                <button className="btn btn-active btn-neutral">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full lg:h-[500px]">
          <img src={im3} className="w-full rounded-xl" />
          <div className="absolute flex justify-start items-center rounded-xl transform h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525]">
            <div className="flex flex-col lg:pl-20 md:pl-10 pl-4">
              <div className="text-white">
                <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3 py-1">
                Find Your <br />Next Destination
                </h1>
                <p className="py-4">
                Unlock the secrets of the world's most beautiful places
                </p>
              </div>
              <div>
                <button className="btn btn-error mr-4">Discover More</button>
                <button className="btn btn-active btn-neutral">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full lg:h-[500px]">
          <img src={im4} className="w-full rounded-xl" />
          <div className="absolute flex justify-start items-center rounded-xl transform h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525]">
            <div className="flex flex-col lg:pl-20 md:pl-10 pl-4">
              <div className="text-white">
                <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3 py-1">
                Wander More,<br /> Worry Less
                </h1>
                <p className="py-4">
                Unlock the secrets of the world's most beautiful places
                </p>
              </div>
              <div>
                <button className="btn btn-error mr-4">Discover More</button>
                <button className="btn btn-active btn-neutral">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full lg:h-[500px]">
          <img src={im5} className="w-full rounded-xl" />
          <div className="absolute flex justify-start items-center rounded-xl transform h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525]">
            <div className="flex flex-col lg:pl-20 md:pl-10 pl-4">
              <div className="text-white">
                <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3 text-2">
                Wander More,<br /> Worry Less
                </h1>
                <p className="py-4">
                Unlock the secrets of the world's most beautiful places
                </p>
              </div>
              <div>
                <button className="btn btn-error mr-4">Discover More</button>
                <button className="btn btn-active btn-neutral">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle btn-error btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full lg:h-[500px]">
          <img src={im6} className="w-full rounded-xl" />
          <div className="absolute flex justify-start items-center rounded-xl transform h-full w-[40%] bottom-0 bg-gradient-to-r from-[#151515FF] to-[#15151525]">
            <div className="flex flex-col lg:pl-20 md:pl-10 pl-4">
              <div className="text-white">
                <h1 className="lg:text-6xl md:text-2xl text-xl font-bold lg:py-6 md:py-3 text-2">
                Wander More,<br /> Worry Less
                </h1>
                <p className="py-4">
                Unlock the secrets of the world's most beautiful places
                </p>
              </div>
              <div>
                <button className="btn btn-error mr-4">Discover More</button>
                <button className="btn btn-active btn-neutral">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
      
      </div>
    </div>
        </div>
    );
};

export default Banner;