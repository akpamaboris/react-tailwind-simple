import "./App.css";
import { useState, useEffect } from "react";
import { Editor } from "./components/Editor/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <script src="https://cdn.tailwindcss.com"></script>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html]);
  return (
    <>
      <div className="top-pannel">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
      </div>
      <div className="bottom-pannel">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
