import { BsArrowDownRight } from "react-icons/bs";


export default function BentGrid(){
  return <>
    
    <div className="wrapper">
  <div className="box1">
    <img className="box1-img" src="src/assets/Chritsmas.png" alt="thankyougift" />  
  </div>
  <div className="box2">
    <span className="box-2-inner">
    <h1 className="box-2-item">Find the <span className="text-blue-700">best gift</span> for your loved ones for any occasion</h1>
    <p className="box-2-p">show love and appreciation in a box</p>
    <span className="brand-categories">
      25 brands Different categories
    </span>
    <button className="box-2-explore" >
      <p>Explore</p>
       </button>
    </span>
  </div>
  <div className="box3">
    <span>
    <h1>2k+</h1>
    <h3> Satisfied Customer so far</h3>
    </span>
  </div>
  <div className="box4">
    <img src="src/assets/thankyougift.png" alt="thankyougift" />

  </div>
  <div className="box5">
   <span className="box-5-item">
    <h2>Let us suggest the Suitable gifts for you</h2>
    <span className="arrow-circle">
    <BsArrowDownRight className="arrow" />  
    </span> 
    </span>  
  </div>
</div>



    </>
}