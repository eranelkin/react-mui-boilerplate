import { Textarea } from "@mui/joy";
import Input from "@mui/joy/Input";
import VirtualizedList from "./components/VirtualizedList";
import PaginatedFetch from "./components/PaginatedFetch/PaginatedFetch";

import "./App.scss";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      {/* <Input
        color="neutral"
        variant="plain"
        placeholder="type..."
        sx={{ width: 250 }}
      />
      <div style={{ height: 1, padding: 10 }} />
      <Textarea
        size="md"
        name="Size"
        placeholder="Medium"
        sx={{ width: 250 }}
      />
      <input
        type="text"
        id="input_name"
        name="name"
        placeholder="Enter your name"
      />
      <textarea
        id="textarea_message"
        name="message"
        rows="5"
        placeholder="Write your message here..."
      ></textarea>
      <div style={{ paddingTop: 16 }} /> */}
      <VirtualizedList />
      <PaginatedFetch />
    </div>
  );
}

export default App;
