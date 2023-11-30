import { useState } from "react";

function App() {
  let [color, setColor] = useState("pink");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "blue" }}
            >
              BLUE
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "yellow" }}
            >
              YELLOW
            </button>
            <button
              onClick={() => setColor("#808080")}
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "#808080" }}
            >
              GREY
            </button>
            <button
              onClick={() => setColor("#000")}
              className="outline-none px-4 py-1 rounded-full"
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              BLACK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
