# Wordle Clone

This project was made for showcase purposes of my React.js abilities ~ @DanBullockCS

## Game Requirements 

The Wordle clone will follow the same rules as the existing game we all know and love. The exact requirements are listed below. 

1. The player has a total of 6 guesses
2. Each guess must be a valid word [use API endpoint](https://wordle-apis.vercel.app/api/validate)
3. The player must be able to input their guess using their keyboard and pressing enter to submit
4. Guesses that are not valid words don’t impact their remaining number of guesses
5. If the player guessed a character that’s in the word and in the correct position, the square must be highlighted green [use API endpoint](https://wordle-apis.vercel.app/api/validate)
6. If the player guessed a character that’s in the word and not in the correct position, the square must be highlighted yellow [use API endpoint](https://wordle-apis.vercel.app/api/validate)
7. If the player guessed a character that’s not in the word, the square must be highlighted grey [use API endpoint](https://wordle-apis.vercel.app/api/validate)

If at any point the instructions are unclear, follow the existing Wordle rules. You won't be penalized for making reasonable assumptions. 

# Create React App Boilerplate:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
