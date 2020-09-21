![Editor preview](src/assets/img/Editor%20preview.png)

# Simple text editor

Simple editor with basic text styling and save and load functionality. Created using the [WTF Webpack Started Kit](https://github.com/maciejkorsan/wtf-webpack-starter) by Maciej Korsan.

## How to use it?

### Text input
- Input any text into the text field.
- Text field is not resizable, but scrolling is enabled when the content exceeds available space.

### Text style
- Use buttons on the right hand side to format the text.
- Effects can only be applied to the whole text/text field, it's not possible to only apply them to a selected fragment.
- Bold, cursive and color effects can be applied together.
- Only one color can be applied at the same time.
- To clear all styling, press the "Default" button.

### Save and Load functionality
- When happy with the text, press "Save" to store the text and its formatting in the browser history.
- Use "Load" to recover the saved content.
- Content will be available until browser history is cleared (`localStorage` functionality is used).
- **"Load only text"**
    - When this option is selected, the editor will load only the text from the most recent save. 
    - Any style options active in the editor when this is done will be preserved and will affect the loaded text.
- **"Auto-load"**
    - When this option is selected, the editor will always load the latest saved content.
    - Can be used together with "Load only text".
    - This option does not automatically save the content of the editor. The editor will load only the content which has most recently been saved by the user.
