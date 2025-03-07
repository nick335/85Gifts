import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BentGrid() {
  return (
    <>
      <div
        className="wrapper grid 
      grid-rows-16 md:grid-cols-6 md:grid-rows-2 gap-2 md:grid-flow-dense "
      >
        <div
          className="box1 max-h-52 
        col-start-1 col-end-7 row-start-1 row-end-3
        md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2  h-[40"
        >
          <img
            className="box1-img"
            src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741367408/Chritsmas_piroiy.png"
            alt="thank you gift"
          />
        </div>

        <div className="box2 h-64 col-start-1 col-end-7 row-start-3 row-end-6 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-4 md:h-[60vh]">
          <span className="box-2-inner">
            <h1 className="box-2-item text-2xl/8 -mt-[32px] md:text-4xl lg:text-4xl  md:mt-0 ">
              Find the <span className="text-blue-700 ">best gift </span>
              for your loved ones for any occasion
            </h1>
            <p className="box-2-p my-2">show love and appreciation in a box</p>
            <span className="brand-categories bg-[#A9A9A9] p-2 rounded-lg">
              25 brands Different categories
            </span>
            <Link to="/Signup">
            <button className="box-2-explore">
              <p>Explore</p>
            </button>
            </Link>
          </span>
        </div>

        <div className="box3 flex flex-row justify-start items-center bg-black text-white text-left h-24 pl-4  col-start-1 col-end-7 row-start-7 row-end-8 md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-2 md:mb-2">
          <span>
            <h1 className="font-medium text-2xl">2k+</h1>
            <h3> Satisfied Customer so far</h3>
          </span>
        </div>

        <div className="box4 col-start-1 col-end-7 row-start-8 row-end-10  md:col-start-5 md:col-end-7 md:row-start-2 md:row-end-3 mb-4 md:-mt-24">
          <img
            src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372524/thankyougift_kp5rqa.png"
            alt="thank you gift"
            className="h-40 md:h-[40vh]"
          />
        </div>

        <div className="box5 h-32 flex flex-row justify-center items-center bg-black text-white  col-start-1 col-end-7 row-start-10 row-end-12  md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 md:mt-4 md:h-[24vh]">
          <span className="box-5-item relative items-center gap-4 p-[2vw]">
            <h2>Let us suggest the Suitable gifts for you</h2>
            <span className="arrow-circle  absolute right-1 -bottom-4 md:bottom-1 md:-right-10">
              <BsArrowDownRight
                className="arrow  bg-white rounded-full p-4 mt-4 right-1
                md:right-5 w-8 h-8 md:mt-24 md:min-h-[40px] md:min-w-[40px]"
              />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
