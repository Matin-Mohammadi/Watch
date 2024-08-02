import { useParams , useNavigate } from "react-router-dom"
import { deleteWatch, getWatch } from "../data/data"

const Watch = () => {
  let navigate=useNavigate()
  let params=useParams()
  let watch=getWatch(params.watchId)
  if(watch){
    return(

      <div className="d-flex flex-column justify-content-center align-items-center" style={{background:"rgba(255,255,255,.1)",padding:"1rem 0",backdropFilter:"blur(8px)",width:"300px",padding:"2.5111rem 0",borderRadius:"10px",margin:"0 auto"}}>
        <img src={watch.image} style={{width:"200px",borderRadius:"10px"}} alt="" />
        <p className="font20" style={{marginTop:"1rem"}}>{watch.name}</p>
        <p className="font20">{watch.brandName}</p>
        <p className="font20">{watch.price}</p>
        <button className="btn btn-danger"
        onClick={()=>{
          deleteWatch(watch.id);
          navigate("/watches")
        }}>
          Remove Watch
        </button>
      </div>
    )
  }else{
    return(
      <div>Not Found</div>
    )
  }
}

export default Watch
