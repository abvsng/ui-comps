export default function Accordion({ children, title, show, changeShow, index }) {
  return (
    <>
      <div className="md:w-3/5 w-3/4 mx-auto border-2 rounded-2xl border-cyan-700 my-3">
        <div
          className="flex flex-row justify-between cursor-pointer items-center bg-slate-600 rounded-2xl"
          onClick={() => {
            changeShow(index);
          }}
        >
          <div className="p-2 font-bold text-xl px-4 ">{title}</div>
          <div className=" px-4">{show ? "-" : "+"}</div>
        </div>
        {show && (
          <div className=" p-4 text-justify border-t-2 border-cyan-700">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
