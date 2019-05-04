## monaco-vscode-textmate-theme-converter

VSCode themes are directly __not__ compatible with monaco-editor themes. The problem here is that vscode uses tmGrammar tokens for colorization support while monaco uses its own code editor to generate language tokens.
(See more about it [here](https://github.com/Microsoft/monaco-editor/issues/675#issuecomment-363151951)).

Yu can use [monaco-textmate](https://www.npmjs.com/package/monaco-textmate) to make your monac-editor tmGrammar compatible.


Once the tokens are tmGrammar compatible, you need to convert vscode generated theme data to monaco-editor compatible api. This package does exactly that.

## Usage:

```ts
import { convertTheme, convertThemeFromDir } from 'monaco-vscode-textmate-theme-converter';

/*
 * In vscode use command: `Developer: Generate Color Theme From Current Settings`
 * Copy the generated JSON and use it as input for the function below.
 */
const theme : IVSCodeTheme = {...}
convertTheme(theme);

/*
 * Convert multiple vscode themes to monaco themes.
 * This function takes as arguments an input directory with generated vscode json files and generated output files with the same names at output directory.
 */
convertThemeFromDir(inputDir: './my-vscode-themes-collection-dir/in', outDir: './my-vscode-themes-collection-dir/out');
```
