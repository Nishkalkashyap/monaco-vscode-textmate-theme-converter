import { IVSCodeTheme } from "./interfaces";
import * as monaco from 'monaco-editor';
export * from './interfaces';
export declare function convertThemeFromFilePath(inputFilePath: string, outputFilePath: string): void;
export declare function convertThemeFromDir(inputDir: string, outDir: string): void;
export declare function convertTheme(theme: IVSCodeTheme): monaco.editor.IStandaloneThemeData;
