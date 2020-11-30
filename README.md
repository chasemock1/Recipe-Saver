## Overview

**Recipe Saver** is a web application that you can create and save your favorite recipes for easy access later. The application also will have a rotating recipe of the day, as well as having current "trending" recipes. 


<br>

## MVP

The **Recipe Saver** MVP is:
 - Create 3 tables
 - Have association between 2 tables
 - Full CRUD throughout the whole applicaition
 - 2 media queries 
<br>

### Goals

- Get more familar with ruby on rails
- Implement 1 Post-Mvp item

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      |                      Roles                            |
| :--------------: |:-----------------------------------------------------:|
|      React       | Used for the front end development                    |
|   React Router   | Allows for multiple pages to be created and traversed |
|   Ruby on rails  | Creates the backend api                               |
|       Ruby       | Langauge to be used on rails                          |
 

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

[Wireframe](https://www.figma.com/file/9BtZOz6pCeWsBb9bxcpWTB/P4-project?node-id=0%3A1)


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ screens/
      |__ Create recipe
            |__ CreateRecipe.jsx
            |__ CreateRecipe.css
      |__ HomePage
            |__ Homepage.jsx
            |__ Homepage.css
      |__ Trending
            |__ Trending.jsx
            |__ Trending.css
      |__ Detail
            |__ Detail.jsx
            |__ Detail.css
      |__ Favorite      
            |__ Favorite.jsx
            |__ Favorite.css
      |__ Profile Page
            |__ ProfilePage.jsx
            |__ ProfilePage.css
|__ components/
      |__ Recipe Of The Day
            |__ RecipeOfTheDay.jsx
            |__ RecipeOfTheDay.css
      |__ Shared
            |__ Nav
                  |__ Nav.jsx
                  |__ Nav.css
            |__ Layout
                  |__ Layout.jsx
                  |__ Layout.css
            |__ Footer
                  |__ Footer.jsx
                  |__ Footer.css
|__ services/
      |__ apiConfig.js
      |__ Recipes.js

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](https://whimsical.com/p4-componet-tree-SfJm126HL7jCuwLxhdFzie)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                              | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------| :------: | :------------: | :-----------: | :---------: |
| Create Backend table              |    H     |     4 hrs      |      TBD      |     TBD     |
| Create backend CRUD Actions       |    H     |     6 hrs      |      TBD      |     TBD     |
| Create each landing page          |    H     |     8 hrs      |      TBD      |     TBD     |
| Create front end CRUD Actions     |    H     |     3 hrs      |      TBD      |     TBD     |
| Add Css                           |    H     |     5 hrs      |      TBD      |     TBD     |
| Post Mvp                          |    L     |     3 hrs      |      TBD      |     TBD     |
| TOTAL                             |          |    29 hrs      |      TBD      |     TBD     |


<br>

### Server (Back End)

#### ERD Model

https://i.imgur.com/LdJinii.png

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
