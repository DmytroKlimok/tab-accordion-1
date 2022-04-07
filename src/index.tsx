import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PanelType = {
    "title": string,
    "text": string
}

export type AppProps = {
    panels: Array<PanelType>
}

const panels: Array<PanelType> =
    [
        {
            "title": "title1",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere ante justo, at fermentum nisl blandit sit amet. Nullam sodales aliquam placerat. Quisque metus risus, auctor eget porta sed, sodales a purus. Nulla facilisi. Proin auctor feugiat mauris. Suspendisse in ullamcorper nisi. Pellentesque id neque non neque commodo facilisis. Nulla ultricies nulla bibendum ipsum vehicula tristique. Pellentesque in ornare nunc. Nullam facilisis mi sed sapien semper, et commodo sem aliquam. Vestibulum a gravida diam. Nunc mattis faucibus felis, id facilisis massa viverra sit amet. Sed vel urna nec sapien viverra faucibus eu sed quam."
        },
        {
            "title": "title2",
            "text": "Integer feugiat imperdiet lectus nec aliquet. Mauris in luctus libero. Mauris bibendum suscipit congue. Curabitur ullamcorper leo sapien, quis cursus ligula venenatis a. Praesent sit amet vestibulum mi. Nullam finibus, sapien vel sollicitudin dictum, libero diam tincidunt velit, nec tincidunt nisl nulla eget nisi. Proin at venenatis nunc. Pellentesque ut ligula est."
        }
    ]

ReactDOM.render(
  <React.StrictMode>
    <App panels = {panels}/>
  </React.StrictMode>,
  document.getElementById('root')
);
