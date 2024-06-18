import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../store/noteSlice";
import { inputStatusSliceActions} from "../store/inputStatusSlice"
import { useRef } from "react";
let InputBox = () => {
  const dispatch = useDispatch();
  let bodyElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let data = bodyElement.current.value;
    console.log(data);
    let product = {
      id: data.length,
      body: data,
    };
    dispatch(noteSliceActions.addNote(product));
    dispatch(inputStatusSliceActions.changeStatus());
  };
  return (
    <>
      <div className="col-3 mt-4">
        <div className="card" style={{ width: "18rem", height: "12rem" }}>
          <form className="card-body note" onSubmit={handleOnSubmit}>
            <textarea
              rows={4}
              cols={10}
              className="transperent"
              ref={bodyElement}
            ></textarea>
            <div className="button_box">
              <button
                className="my-button text-white delete-btn"
                style={{ width: "2rem", height: "2rem" }}
                type="submit"
              >
                <MdOutlineModeEdit />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default InputBox;
