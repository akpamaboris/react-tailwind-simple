import "./App.css";
import { useState, useEffect } from "react";
import { Editor } from "./components/Editor/Editor";
import tailwindScript from "./tailwind.23";

function App() {
  const [html, setHtml] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <script src=${tailwindScript}></script>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html]);
  return (
    <>
      <h1 className="mt-0 mb-2 text-6xl font-normal leading-normal text-center ">
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
      <div className="flex w-[95%]  mt-10  ml-auto mr-auto">
        <button
          className="px-4 py-2 ml-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => {
            setHtml(
              `<div class="illustration absolute top-[100px] left-[200px]"> <div class="face bg-[#fcba03] h-[400px] w-[400px] rounded-[100%] "> <div           class="mouth absolute bg-[#4f2103] w-[215px] h-[90px] rounded-tl-[7px] rounded-tr-[7px] rounded-br-[100px] rounded-bl-[100px] top-[250px] left-[90px]"></div> <div class="eye-section w-[285px] h-[100px] absolute top-[70px] left-[70px]" > <div class="left-eye bg-[#4f2103] w-[52px] h-[60px] absolute top-[25px] rounded-[50px] before:content-[''] before:block before:bg-[#FFFFFF] before:w-[23px] before:h-[23px] before:absolute before:top-[20px] before:left-[10px] before:rounded-[100px]"></div><div class="right-eye bg-[#4f2103] w-[52px] h-[60px] absolute top-[25px] rounded-[50px] right-[10px] before:content-[''] before:block before:bg-[#FFFFFF] before:w-[23px] before:h-[23px] before:absolute before:top-[20px] before:left-[10px] before:rounded-[100px]" ></div>   </div> </div>  </div>  `
            );
          }}
        >
          Add a smiley 🙂
        </button>

        <button
          onClick={() => {
            setHtml("");
          }}
          className="px-4 py-2 ml-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          reset
        </button>
      </div>
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="my-3 text-3xl font-bold md:text-4xl font-heading">
              By Boris Akpama{" "}
            </h2>
            <p className="leading-relaxed text-blueGray-400">
              Contact Me for more.
            </p>
            <div className="mt-8">
              <a
                className="block px-8 py-4 mb-4 text-xs font-semibold leading-none text-center text-white bg-blue-600 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
                href="https://www.linkedin.com/in/borisakpama/"
                data-removed="true"
              >
                LinkedIn
              </a>
              <a
                className="block px-8 py-4 text-xs font-semibold leading-none text-center bg-white border rounded sm:inline-block text-blueGray-500 hover:text-blueGray-600 border-blueGray-200 hover:border-blueGray-300"
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
