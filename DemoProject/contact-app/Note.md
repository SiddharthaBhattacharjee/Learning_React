# Key Concepts From this Project:

1) ## useStates in React: 
    states are used to manage data in react, like in this project the array which contains the contacts is managed by state, whenever we assign a new addition, a unique id is assigned to the contact, which is ensured by state, it only allows adding and removing of elements through functions, also helps to integrate local storage using useEffect. [See App.js]

2) ## useEffect in React:
    use effect is used along with use state to use local storage, the useEffect is run every time the useState is updated. Hence it is used to update local storage each time the contacts state is updated in the app. [See App.js]

3) ## Props in React:
    Props is a very important concept while using components in react apps. Here , App.js uses ContactList.js as a component which uses ContactCard.js as a component. By using props we can pass a property (state, variable, data or function) from parent to child component. To send data from parent to child, we can pass state or cariable as props, to get data from child to parent, we can pass functions from parent and call the function in child passing the data as arguement. Like in this case, we used it to get id from ContactCard to ContactList and then ContactList to App.js for deleting contact, we first passed the function of app.js to ContactList.js and then we called that function inside of another function which is passed in ContactCard.js , in contactCard.js we get the value of id and call the function of ContactList.js with that id as arguement , which calls the function in App.js passing along the id as arguement. This is how we got the id from grandchild to child to parent.

4) ## Components in React:
    Components make the part of the code reuseable. for eg:
    <pre>
        import React from 'react';
        import './Header.css';
        // This is function component example
        const Header = () => {
            return (
                <.Div className = "ui fixed menu">
                    <.Div className="ui container center">
                        Contact Manager
                    <./Div>
                <./Div>
            );
        };
        export default Header;
    </pre>
    Here, We see a component, the Header function is the component which is exported to App.js

    In app.js we use <pre> import Header from "./Header"; </pre> to import the Header function from header.js and then we can use it like this:

    <pre>
     return (
        <.div className='ui container'>
            <.Header><./Header>
            <.AddContact addContactHandler={addContactHandler}><./AddContact>
            <.ContactList contacts={contacts} getContactId={removeContactHandler}><./ContactList>
        <./div>
    );
    </pre>

    Here, we have used the Header component in app.js
    Also we can observe the passing of Props here.

5) ## Local Storage:
    It is a storage to store the data in a users browser locally. Use is demonstrated in App,js

6) ## React Router:
    It is used to navigate between pages in a single html page in react, different things will be loaded onto the page based on difference in url (making it look like different pages when in reality it is single page)<br>
    To use React router, we need to install a package called react-router-dom, by using the code:
    <pre>$ npm install react-router-dom --save</pre>
    Next we need to import into app.js
    <pre>import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';</pre>

7) ## Switch in React Router:
    When assigning path to different components in react, it is needed to select the components correctly.<br>
    Here, we are assigning path to AddContact as ./add and ContactList as ./ but when we try it without switch, /add loads both the components as ./add also contains ./, to prevent that, switch is used, since ./add comes first, it fits the condition for./add first and only it is loaded, where as if ./ is loaded, ./add is not a match and hence contact list is loaded. Note that if we put contact list first in switch, we will get contact list for both ./ and ./add since both contain ./<br>
    To minimise the cofusion, we can use a property called exact, which will load the component only if the url exactly matches the path.


# Notes:

1) The {} is used in import to import something which is not a default export.