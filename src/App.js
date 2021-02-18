import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
}

export default App;
