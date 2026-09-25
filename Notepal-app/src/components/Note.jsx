import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { noteSliceActions } from "../store/noteSlice";
let Note = ({note}) => {
  const dispatch =  useDispatch()
  const [isEditing, setIsEditing] = useState(false);
  let bodyElement = useRef();

  const handleOnDelete = () =>{
    dispatch(noteSliceActions.removeNote(note.id))
  }
  const handleOnSave = () => {
    dispatch(noteSliceActions.editNote({ id: note.id, body: bodyElement.current.value }));
    setIsEditing(false);
  }
  return (
    <>
      <div className="col-3 mt-4">
        <div className="card" style={{ width: "18rem", height: "12rem" }}>
          <div className="card-body note">
            {isEditing ? (
              <textarea
                rows={4}
                cols={10}
                className="transperent"
                defaultValue={note.body}
                ref={bodyElement}
              ></textarea>
            ) : (
              <p className="card-text">
                {note.body}
              </p>
            )}
            <div className="button_box">
              {isEditing ? (
                <button
                  className="my-button text-white delete-btn"
                  style={{ width: "2rem", height: "2rem" }}
                  onClick={handleOnSave}
                >
                  <MdOutlineModeEdit />
                </button>
              ) : (
                <button
                  className="my-button text-white delete-btn"
                  style={{ width: "2rem", height: "2rem" }}
                  onClick={() => setIsEditing(true)}
                >
                  <MdOutlineModeEdit />
                </button>
              )}
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
