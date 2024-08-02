import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { getAllWatches } from "../data/data";
import Watch from "./Watchh";

const Watches = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  const watches = getAllWatches();

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 gap-4">
        <div>
          {" "}
          <input
            type="text"
            placeholder="Search here"
            value={searchParams.get("filter")}
            onChange={(e) => {
              let filter = e.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
              
            }}
            className="font20"
            style={{padding:"10px 30px",color:"whitesmoke",borderRadius:"30px",border:"none",backgroundColor:"rgba(0,0,0,.5"}}
          ></input>
        </div>
        <div className="d-flex gap-4">
          {watches
            .filter((watch) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = watch.name;
              return name.includes(filter);
            })
            .map((watch) => (
              <NavLink
                className="font20 mt-2"
                style={({ isActive }) => {
                  return (
                    {
                      color: isActive ? "gray" : "",
                    },
                    { textDecoration: "none", color: "whitesmoke" }
                  );
                }}
                to={`${watch.id}${location.search}`}
                key={watch.id}
              >
                {watch.name}
              </NavLink>
            ))}
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Watches;
