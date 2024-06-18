import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../store/noteSlice";
let Note = ({note}) => {
  const dispatch =  useDispatch()
  const handleOnDelete = () =>{
    dispatch(noteSliceActions.removeNote(note.id))
  }
  return (
    <>
      <div className="col-3 mt-4">
        <div className="card" style={{ width: "18rem", height: "12rem" }}>
          <div className="card-body note">
            <p className="card-text">
              {note.body}
            </p>
            <div className="button_box">
              <button
                className="my-button text-white delete-btn"
                style={{ width: "2rem", height: "2rem" }}
                onClick={handleOnDelete}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Note;
