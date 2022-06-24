# Shared layouts template

<Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" alt="react logo" height="100px" align="right" />

[![react](https://img.shields.io/badge/react-%5E17.0.2-blue?logo=React)](https://reactjs.org/)

</br>

<small>All badges are links to each doc</small>

## Description of that project 📖

This project is a template to be a start point to learn the concept of styled components.

## Project Folders Structure 👷

```code
.
├── public...........................# contains files used by React as template;
├── src..............................# projects folders were created here;
│    ├── assets......................# contains reusable components;
│    │   └── images..................# centralize images and create React Components to each one;
│    ├── pages.......................# group project modules;
│    │   └── [pages_folder]
│    ├── routes......................# controller of routes creation and redirects on sign in/sign out;
│    ├── styles......................# centralize global styles to be reused in project;
│    └── [...].......................# root files to run React as well;
└── [...]............................# root files as environment, cypress, linters, etc;
```

## Configuring your Project 🧰

Yarn will install all dependencies into all projects, start and build them

```batch
yarn install
yarn start
yarn build
```
