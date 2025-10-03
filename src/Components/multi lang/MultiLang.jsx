import React from "react";
import { config } from "./config";
export default function MultiLang() {
  const [lang, setLang] = React.useState("en");
  return (
    <>
      <div className="m-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <div>
        <div className=" m-4">
          <h1 className=" font-bold text-2xl ">{config[lang].homeTitle}</h1>
          <div className="text-justify">{config[lang].homeDescription}</div>
        </div>
        <div className=" m-4">
          <h1 className=" font-bold text-2xl ">{config[lang].aboutTitle}</h1>
          <div className="text-justify">{config[lang].aboutDescription}</div>
        </div>
        <div className=" m-4">
          <h1 className=" font-bold text-2xl ">
            {config[lang].contactTitle}
          </h1>
          <div className="text-justify">{config[lang].contactDescription}</div>
        </div>
      </div>
    </>
  );
}
