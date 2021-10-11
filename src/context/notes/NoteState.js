import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Akram",
    age: 32,
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
