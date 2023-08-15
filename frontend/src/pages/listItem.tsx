import React, { useEffect, useState } from "react";

export const ListItem = () => {
  const [notes, setNotes] = useState<any>([]);

  useEffect(() => {
    getNotes();
    return () => {};
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/1");
    let singleNote = await response.json();
    setNotes(singleNote);
    console.log(singleNote);
  };

  return (
    <div>
      <h1>singleNote</h1>

      <ul>
        <li key={notes?.id}>{notes?.title}</li>
      </ul>
    </div>
  );
};
