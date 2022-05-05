import React, { useState } from 'react';
import './style.css';

const folderStructure = [
  {
    name: 'src',
    isFolder: true,
    childs: [
      {
        name: 'components',
        isFolder: true,
        childs: [
          {
            name: 'menu-component',
            isFolder: true,
            childs: [
              {
                name: 'menu-component',
              },
            ],
          },
        ],
      },
      {
        name: 'containers',
        isFolder: true,
        childs: [],
      },
      {
        name: 'index',
        isFolder: false,
      },
    ],
  },
];

const Folder = ({ folder, offset }) => {
  const [expand, setExpand] = useState(false);
  const { isFolder, childs } = folder;

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <div
        className="folder"
        style={{ marginLeft: offset }}
        onClick={handleClick}
      >
        {folder.name}
      </div>
      <div>
        {isFolder &&
          expand &&
          childs.map((child) => {
            return child.isFolder ? (
              <Folder folder={child} offset={offset + 20} />
            ) : (
              <div className="file" style={{ marginLeft: offset + 20 }}>
                {child.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

const FolderStructure = (props) => {
  const { folders } = props;
  return (
    <div>
      {folders.map((folder) => (
        <Folder key={'0'} folder={folder} offset={20}></Folder>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Folder Structure App</h1>
      <FolderStructure folders={folderStructure} />
    </div>
  );
}
