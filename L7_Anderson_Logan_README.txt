#  Lab 7

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 13 03 2025
* *Last Modification Date*: 21 03 2025
* *Lab URL*: <https://git.cs.dal.ca/landerson/csci-3172/-/tree/main/labs/lab7?ref_type=heads and >


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Logan Anderson](lg474207@dal.ca) - (Author)


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Bootstrap 5.0](https://react-bootstrap.netlify.app/docs/getting-started/introduction) - Framework used for the layout of my portfolio site.



## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### Header.js

*Lines #7-#13*

```
function Header() {
  // Used the usePersistState hook to change theme state
  const [theme, setTheme] = usePersistState('theme', 'light');

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
  }, [theme, setTheme]);

```
The code above was created by adapting the code in [LogRocket](https://blog.logrocket.com/dark-mode-react-in-depth-guide/) as shown below: 

```
const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

```
```

- <!---How---> The code in [LogRocket](https://blog.logrocket.com/dark-mode-react-in-depth-guide/) was implemented by changing the light and dark mode in the website
- <!---Why---> [LogRocket](https://blog.logrocket.com/dark-mode-react-in-depth-guide/)'s Code was used because I was making sure my dark mode function worked and was programmed properly
- <!---How---> [LogRocket](https://blog.logrocket.com/dark-mode-react-in-depth-guide/)'s Code was modified as I used a theme that was set to light for light mode and otherwise dark



### Projects.js

*Lines #14 - #36*

```
  <strong>Problem Solved:</strong> Developed a mobile application with a team of students for posting quick jobs for users to apply for. 
        <br />
        <strong>Technology Used:</strong> Firebase database and Android Studio
        <br />
        <strong>My Role:</strong> Implementing the dashboard, job posting screen, and the push notifications feature.
      </p>

      <h2>LawnLog App</h2>
      <p>
        <strong>Problem Solved:</strong> Created a mobile application for small lawn care business owners to store customer information, locations, schedule, and many more simple features.
        <br />
        <strong>Technology Used:</strong> React Native, Expo, APIs, and Firestore cloud database.
        <br />
        <strong>My Role:</strong> Author for individual project using React Native.
      </p>

      <h2>Battleships Assignment</h2>
      <p>
        <strong>Problem Solved:</strong> Developed a program using Java to replicate the game, Battleships. 
        <br />
        <strong>Technology Used:</strong> Java
        <br />
        <strong>My Role:</strong> Author.

```

The code above was created by adapting the code in [W3Schools](https://www.w3schools.com/tags/tag_strong.asp) as shown below: 

```
<strong>This text is important!</strong>

```

- <!---How---> The code in [W3Schools](https://www.w3schools.com/tags/tag_strong.asp) was implemented by using the strong tag instead of header
- <!---Why---> [W3Schools](https://www.w3schools.com/tags/tag_strong.asp)'s Code was used because I wanted to make the text bolder
- <!---How---> [W3Schools](https://www.w3schools.com/tags/tag_strong.asp)'s Code was modified by simply using the strong tag for my content

## Acknowledgments

* Thursday's session recording helped me setup the React project and how to organize the structure of folders
* Lab 7 guide helped me setup the backend
