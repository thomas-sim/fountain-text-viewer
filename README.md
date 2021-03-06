# Fountain text Viewer

To display texts and eventually highlight lines from a character.

Project under [Licence AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.txt)

Fountain parser based on the work of MattDaly (MIT licence)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Clone, install dependencies and run `npm start`

Demo is hosted by [Surge](https://surge.sh) on https://fountain-text-viewer.surge.sh

# Known limitation

This project uses `dangerouslySetInnerHTML` to display the parsed fountain code which can be, you guessed it, dangerous.

This isn't critical, as no sensible information would be handled by this project, but could be a interesting improvement in order to make the project more secure - and have a blast developping a React friendly Fountain parser.
