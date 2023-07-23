import React from "react";
import { connect } from "react-redux";
import { updateContent } from "../redux/actions";
import Editor from "./Editor";
import Preview from "./Preview";

const Markdown = ({ content, updateContent }) => (
  <div className="App d-flex flex-column vh-100 container bg-light rounded p-4">
    <div className="d-flex flex-row h-100 overflow-auto">
      <div
        className="flex-grow-1 h-100 overflow-auto p-2"
        style={{ flexBasis: "50%" }}
      >
        <Editor content={content} onContentChange={updateContent} />
      </div>
      <div
        className="flex-grow-1 h-100 overflow-auto p-2"
        style={{ flexBasis: "50%" }}
      >
        <Preview content={content} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({ content: state.content });
const mapDispatchToProps = { updateContent };

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);
