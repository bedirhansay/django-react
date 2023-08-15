import React from "react";
import { Header } from "./components/Header";
import { NoteListPage } from "./pages/NoteListPage";
import { ListItem } from "./pages/listItem";
function App() {
  return (
    <div>
      <Header />
      <NoteListPage />
      <ListItem />
    </div>
  );
}

export default App;
