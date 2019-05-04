import { IVSCodeTheme, IMonacoThemeRule } from "./interfaces";
import * as fs from 'fs-extra';
import * as path from 'path';
import * as monaco from 'monaco-editor';
export * from './interfaces';

export function convertThemeFromDir(inputDir: string, outDir: string) {

    const callBack = async (fileName: string) => {
        try {
            const filePath = path.join(inputDir, fileName);
            if ((await fs.stat(filePath)).isDirectory()) {
                return;
            }
            let themeFile: string = (await fs.readFile(filePath)).toString();
            themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
            const theme: IVSCodeTheme = JSON.parse(themeFile);
            const out = convertTheme(theme);
            fs.ensureFileSync(path.join(outDir, fileName));
            await fs.writeFile(path.join(outDir, fileName), JSON.stringify(out));
        } catch (err) {
            throw new Error(err);
        }
    }

    fs.readdirSync(inputDir).map(callBack);
}

export function convertTheme(theme: IVSCodeTheme): monaco.editor.IStandaloneThemeData {

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

            const split = color.scope.split(',');

            if (split.length > 1) {
                color.scope = split;
                evalAsArray();
                return;
            }



            monacoThemeRule.push(Object.assign({}, color.settings, {
                // token: color.scope.replace(/\s/g, '')
                token: color.scope
            }));
            return;
        }

        evalAsArray();

        function evalAsArray() {
            (color.scope as string[]).map((scope) => {
                monacoThemeRule.push(Object.assign({}, color.settings, {
                    token: scope
                }));
            });
        }
    });

    return returnTheme;
}