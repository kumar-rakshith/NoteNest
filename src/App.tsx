import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";

export type Note = {
  id: String;
} & NoteData;

export type NoteData = {
  title: String;
  markDown: String;
  tags: Tag[];
};

export type Tag = {
  id: String;
  label: String;
};

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>hello</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
