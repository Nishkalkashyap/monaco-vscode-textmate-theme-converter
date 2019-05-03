import { IVSCodeTheme, IMonacoThemeRule } from "./interfaces";
import * as fs from 'fs-extra';
import * as path from 'path';
import * as monaco from 'monaco-editor';

fs.readdirSync('./src/themes').map(async (fileName) => {
    let themeFile: string = (await fs.readFile(path.join('./src/themes', fileName))).toString();
    themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
    const theme: IVSCodeTheme = JSON.parse(themeFile);
    const out = convertTheme(theme);
    fs.ensureFileSync(path.join('./out', fileName));
    await fs.writeFile(path.join('./out', fileName), JSON.stringify(out));
});

function convertTheme(theme: IVSCodeTheme): monaco.editor.IStandaloneThemeData {

    const monacoThemeRule: IMonacoThemeRule = [];
    const returnTheme: monaco.editor.IStandaloneThemeData = {
        inherit: false,
        base: 'vs-dark',
        colors: theme.colors,
        rules: monacoThemeRule,
        encodedTokensColors: []
    };

    theme.tokenColors.map((color) => {
        if (typeof color.scope == 'string') {
            monacoThemeRule.push(Object.assign({}, color.settings, {
                token: color.scope
            }));
            return;
        }

        color.scope.map((scope) => {
            monacoThemeRule.push(Object.assign({}, color.settings, {
                token: scope
            }));
        });
    });

    return returnTheme;
}