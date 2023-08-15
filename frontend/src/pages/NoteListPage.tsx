import React, { useEffect, useState } from "react";

export const NoteListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
    return () => {};
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    setNotes(data);
    console.log(data);
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note: any) => {
          return <li key={note.id}>{note.title}</li>;
        })}
      </ul>
    </div>
  );
};
