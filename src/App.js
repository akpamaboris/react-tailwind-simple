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
      <h1 class="text-6xl text-center font-normal leading-normal mt-0 mb-2 ">
        TailwindCSS Playground Simplified
      </h1>
      <div className="w-[95%] h-[700px] mt-10  ml-auto mr-auto">
        <div className="flex h-[90%] ">
          <div className="basis-auto w-[30%] h-[100%]">
            <Editor
              displayName="HTML"
              language="xml"
              value={html}
              onChange={setHtml}
            />
          </div>
          <div className="basis-auto w-[68%] border-2 border-black ml-auto">
            <iframe
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
              srcDoc={srcDoc}
            />
          </div>
        </div>
      </div>
      <section class="py-16">
        <div class="container px-4 mx-auto">
          <div class="max-w-lg mx-auto text-center">
            <h2 class="my-3 text-3xl md:text-4xl font-bold font-heading">
              By Boris Akpama{" "}
            </h2>
            <p class="text-blueGray-400 leading-relaxed">
              Contact Me for more.
            </p>
            <div class="mt-8">
              <a
                class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                href="https://www.linkedin.com/in/borisakpama/"
                data-removed="true"
              >
                LinkedIn
              </a>
              <a
                class="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded"
                href="https://github.com/akpamaboris"
                data-removed="true"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
