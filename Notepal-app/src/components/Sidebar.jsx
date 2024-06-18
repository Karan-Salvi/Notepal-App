import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector} from "react-redux";
import { inputStatusSliceActions } from "../store/inputStatusSlice";


let Sidebar = () => {

  let inputStatus = useSelector(store => store.inputStatus);
  
  const dispatch = useDispatch()

  const handleOnAdd = () =>{
    dispatch(inputStatusSliceActions.changeStatus())
  }
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 bg-body-tertiary "
        style={{ width: "6rem", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex justify-content-center align-items-center  link-body-emphasis text-decoration-none app-name "
        >
          Notepal
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item d-flex justify-content-center align-items-center">
            <button className="my-button text-white m-2" onClick={handleOnAdd}>
              <FaPlus />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
