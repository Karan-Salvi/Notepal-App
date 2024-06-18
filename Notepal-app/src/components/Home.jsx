import { useSelector } from "react-redux";
import Note from "./Note";
import InputBox from "./InputBox";

let Home = () => {
  const notes = useSelector((store) => store.notes);

  let inputStatus = useSelector((store) => store.inputStatus);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {inputStatus === true && <InputBox />}
          {notes.map((note) => (
            <Note key={note.id} note = {note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
