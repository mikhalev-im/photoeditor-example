import React from 'react';
import ReactDOM from 'react-dom';
import { PhotoEditorSDKUIComponent } from 'photoeditorsdk';

/* Uncomment lines below and see what gets imported - some weird object */
// import * as editor from 'photoeditorsdk';
// console.log(editor);

const App = () => {
  return (
    <PhotoEditorSDKUIComponent
      license={'license'}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);