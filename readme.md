![Editor preview](src/assets/img/Editor%20preview.png)

# Simple text editor

Simple editor with basic text styling and save and load functionality. Created using the [WTF Webpack Started Kit](https://github.com/maciejkorsan/wtf-webpack-starter) by Maciej Korsan.

## How to use it?

### Text input
- input any text into the text field
- text field is not resizable, but scrolling is enabled when the content exceeds available space

### Text style
- use buttons on the right hand side to format the text
- effects can only be applied to the whole text/text field, it's not possible to only apply them to a selected fragment
- bold, cursive and color effects can be applied together
- only one color can be applied at the same time
- to clear all styling, press the "Default" button

### Save and Load functionality
- when happy with the text, press "Save" to store the text and its formatting in the browser history
- use "Load" to recover the saved content
- content will be available until browser history is cleared (`localStorage` functionality is used)
