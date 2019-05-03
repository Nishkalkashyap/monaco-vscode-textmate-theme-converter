
import * as monaco from 'monaco-editor';


export interface IVSCodeTheme {
    "$schema": "vscode://schemas/color-theme",
    "type": 'dark' | 'light',
    colors: { [name: string]: string };
    tokenColors: {
        name?: string;
        "scope": string[] | string,
        "settings": {
            foreground?: string;
            background?: string;
            fontStyle?: string;
        }
    }[]
}

export type IMonacoThemeRule = monaco.editor.ITokenThemeRule[]