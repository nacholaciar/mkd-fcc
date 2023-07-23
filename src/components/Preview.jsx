import React from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: true
});

const Preview = ({ content }) => {
  const createMarkup = () => {
    return { __html: marked(content) };
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h2 className="mb-4 text-light text-center">Previewer</h2>
      <div
        id="preview"
        className="preview flex-grow-1 form-control overflow-auto bg-light"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
};

export default Preview;
