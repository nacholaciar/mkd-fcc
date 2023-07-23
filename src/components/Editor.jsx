import React from "react";

const Editor = ({ content, onContentChange }) => {
  return (
    <div className="h-100 d-flex flex-column">
      <h2 className="mb-4 text-light text-center">Editor</h2>
      <textarea
        id="editor"
        className="flex-grow-1 form-control"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      />
    </div>
  );
};

export default Editor;
