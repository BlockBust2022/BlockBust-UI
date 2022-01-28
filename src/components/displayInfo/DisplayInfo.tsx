import { ImageBaseUrl } from "../../constant/constant";
import "./style.css";

const DisplayInfo = (props: any) => {
  return (
    <div className="movie-items">
      <div id="main-container">
        <div className="container">
          <div className="card web" style={{
              
            backgroundColor: "rgb(10, 26, 43)",
          }}>
            <div className="card-body">

              <div className="row">
                <div className="col-2">
                  <img src={`${ImageBaseUrl}${props.image}`} alt={props.name} />
                </div>
                <div className="col-10">
                  <span ><h1>{props.name}</h1></span>
                  <p >Release Date : {props.release}</p>
                
                  <p >{props.description}</p>
                  
                  <p >{props.genere}</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="card mobile" style={{

            backgroundColor: "rgb(10, 26, 43)",
          }}>
            <div className="card-body">

              <img src={`${ImageBaseUrl}${props.image}`} alt={props.name} />

              <div className="col-10">
                  <span ><h1>{props.name}</h1></span>
                  <p >Release Date : {props.release}</p>
                
                  <p >{props.description}</p>
                  
                  <p >{props.genere}</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  );
};

export default DisplayInfo;
