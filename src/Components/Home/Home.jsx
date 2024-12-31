
import logo from "../../assets/avataaar.svg"
export default function Home() {
  return (
    <>
     <div className="home m-0">
     <section className="bg-success">
        <div className="d-flex justify-content-center align-items-center pt-3 text-center">
          <div className="w-25">
          <img className="" src={logo} alt="" />
          <h2 className="pt-2 pb-5 fw-bold text-white">START FRAMEWORK</h2>
          </div>
          
        </div>
        <div className="start d-flex justify-content-center align-items-center w-100 ">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star text-white" ></i>
          <div className="line ms-3 text-info " ></div>
          </div> 
          <p className="text-center fw-medium text-white pt-3 pb-3">Graphic Artist - Web Designer - Illustrator</p>
         
      </section>
     </div>
    </>
  );
}
