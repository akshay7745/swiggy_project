import React from "react";

const Section = ({
  description,
  title,
  isVisible,
  handleVisibility,
  hideIt,
}) => {
  return (
    <div>
      {isVisible ? (
        <>
          {" "}
          <h2 className="text-lg font-semibold text-center text-black m-2">
            {title}
          </h2>
          <p className="border-gray-500 border-2 mb-2 m-2">{description}</p>
          <button
            className="bg-red-500 p-1 rounded-md text-sm font-semibold mb-2 block m-[auto] px-2"
            onClick={hideIt}
          >
            hide
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-center text-black m-2">
            {title}
          </h2>
          <button
            className="bg-green-500 p-1 rounded-md text-sm font-semibold mb-2 block m-[auto] px-2"
            onClick={handleVisibility}
          >
            show
          </button>
        </>
      )}
    </div>
  );
};

export default Section;
