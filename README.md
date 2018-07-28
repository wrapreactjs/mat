# React Material Design Admin Dashboard (MAT )



If you have any questions about the template, please feel free to contact me via email: [flexdamon@gmail.com](mailto:flexdamon@gmail.com). Thanks very much!

![alt text](http://wrapreactjs.com/mat-doc/images/baner.jpg)

## Demo

You can find a demo here [demo here](http://wrapreactjs.com/mat/)

**By:** Damon Tucker  
**Theme Version:** 1.0.0  
**For react bootstrap documentation:** [http://reactstrap.github.io/components/alerts/](http://reactstrap.github.io/components/alerts/)  
**For react material design documentation:** [https://material-ui-1dab0.firebaseapp.com/](https://material-ui-1dab0.firebaseapp.com/)  
**For create-react-app documentation:** [https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)  
**For victory charting documentation:** [https://github.com/FormidableLabs/victory-chart](https://github.com/FormidableLabs/victory-chart)  

About the template
------------------

MAT has a clean and minimalistic design which helps you create an awesome and powerful project. It is perfectly designed and precisely prepared. Template was built based on the latest standards and recommendations. MAT theme is powered by Twitter Bootstrap v4 and React Material Design. Please note that this documentation is dedicated to the main element of the template. With each version, I will try to develop it. But if you have any questions going beyond what is described here don't hesitate to write to me. [flexdamon@gmail.com](mailto:flexdamon@gmail.com)

Installing
----------

**You’ll need to have Node >= 6 on your machine.** You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

Project has the following folder structure at the root level

├── **admin-sample**  
├── **docs**  
├── **mat-seed-react**  
└── **mat-seed-react-bootstrap**  

There are three react projects ( admin-sample, mat-seed-react, and mat-seed-react-bootstrap). These projects are independent from each other. You need to run the following command for each project.

### `npm install`

The above command will install all the required dependencies in the node_modules folder. To run the application run the following command.

### `npm start`

With the above command it will open [http://localhost:3000](http://localhost:3000) in the browser.

This tool doesn’t assume a Node backend. The Node installation is only required for Create React App itself.

You don’t need to install or configure tools like Webpack or Babel.

Available Scripts
-----------------

The following scripts are available for all three react projects. You have to run these commands within each folder.

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

![alt text](http://wrapreactjs.com/mat-doc/images/console1.png)

### `npm test`

Launches the test runner in the interactive watch mode. See the section about create-react-app documentation [running tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more information.

About admin-sample
------------------
This project gives you a sample app with landing page, dashboards, authentication/login, etc..

### Themes

Three default themes shipped with Mat admin theme (Dark, Light, Custom). The Dark and Light themes are the default themes available with React Material Design. The additional custom theme is available at `src/themes/MaterialDesignCustomTheme.js.` You can switch them from the top light bulb icon. The state of the theme is persisted to the local storage.
```
    palette: {
        text: {
            primary: 'rgba(178, 223, 219, 1)',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            hint: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
            divider: 'rgba(255, 255, 255, 0.12)',
            lightDivider: 'rgba(255, 255, 255, 0.075)',
        },
        input: {
            bottomLine: 'rgba(255, 255, 255, 0.7)',
            helperText: 'rgba(255, 255, 255, 0.7)',
            labelText: 'rgba(255, 255, 255, 0.7)',
            inputText: 'rgba(255, 255, 255, 1)',
            disabled: 'rgba(255, 255, 255, 0.5)',
        },
        action: {
            active: 'rgba(255, 255, 255, 1)',
            disabled: 'rgba(255, 255, 255, 0.3)',
        },
        background: {
            default: 'rgba(96, 125, 139, 1)',
            paper: 'rgba(69, 90, 100, 1)',
            appBar: 'rgba(38, 50, 56, 1)',
            contentFrame: grey[900],
            active: 'rgba(67, 160, 71, 1)',
        }
    }
```

### Landing Page

![alt text](http://wrapreactjs.com/mat-doc/images/landing.jpg) 

### Dashboard

Dashboard is powered by Victory charing library. Victory is a pure charting library.

[https://github.com/FormidableLabs/victory-chart](https://github.com/FormidableLabs/victory-chart)

### Custom theme for victory charts

I have created a custom theme for the victory charts. This can be located at src/pages/Dashboardv1/MatTheme.js. This custom theme is used by the dashboard charts. You can tweak the colors to achieve what you need in your dashboard charts.

The map component in the dashboard is powered by react-simple-maps. This library is a pure react library.

[https://github.com/zcreativelabs/react-simple-maps](https://github.com/zcreativelabs/react-simple-maps)

### Forms

The forms in Mat theme is powered by the React Material Design Form components. The samples in the template proved with a start point to design forms for your use cases.

Client side validation example is developed in the Login page. There is no library use to do the validation. It’s simply using state variables and setState.

Authenticating
--------------

The sample app is built with authentication flow login page authenticated routes etc. All secure routes are wrapped in a higher order react component.

```javascript
if (Auth.getUser()) {
  return (
      <Main setTheme={this.props.setTheme}>
          <Switch>
              <Route exact path={"/"} component={Dashboardv1}/>
              <Route exact path={"/home"} component={Dashboardv1}/>
              <Route path={"/ui"} component={Ui}/>
              <Route path={"/contacts"} component={Contacts} />
              <Route path={"/projects"} component={Projects} />
              <Route path={"/tables"} component={Tables} />
              <Route path={"/article"} component={Article} />
              <Route component={Error404} />
          </Switch>
      </Main>
  );
} 
        
```

Seed Projects
-------------

Mat contains two seed projects to get you started

### Mat-seed-react

This seed project importing only React Material Design and other related components. This one has the minimum set of imports to get you started on a new project.

### Mat-seed-react-bootstrap

With this seed project you can use both React Material Design components and Bootstrap react components shipped with react-strap.

![alt text](http://wrapreactjs.com/mat-doc/images/react-strap-mat.png) 

## Contact

Contact me:[flexdamon@gmail.com](mailto:flexdamon@gmail.com)


![alt text](http://wrapreactjs.com/mat-doc/images/slurp3.jpeg) 



