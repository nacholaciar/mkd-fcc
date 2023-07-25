import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContent } from '../redux/contentSlice';
import Editor from './Editor';
import Preview from './Preview';

const Markdown = () => {
  const dispatch = useDispatch();
  const content = useSelector(state => state.content);

  const handleContentChange = newContent => {
    dispatch(updateContent(newContent));
  };

  return (
    <div className="App d-flex flex-column vh-100 container bg-light rounded p-4">
      <div className="d-flex flex-row h-100 overflow-auto">
        <div
          className="flex-grow-1 h-100 overflow-auto p-2"
          style={{ flexBasis: "50%" }}
        >
          <Editor content={content} onContentChange={handleContentChange} />
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
};

export default Markdown;
