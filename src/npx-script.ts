#! /usr/bin/env node
import { program } from 'commander';
import {convertThemeFromDir, convertThemeFromFilePath} from './index';
import * as fs from 'fs-extra';
import * as path from 'path';

program
  .version("0.1.7")
  .requiredOption('-i, --input <inputPath>', 'Specify a file or a folder')
  .option('-o, --output <outputPath>', 'Specify an output path');

program.parse(process.argv);
const options = program.opts<{input: string;output?: string}>();

if(options.input){
    const {input} = options;

    const exists = fs.existsSync(input);
    if(!exists) throw Error('The input path does not exists');

    const stats = fs.statSync(input);
    const isDirectory = stats.isDirectory();
    if(isDirectory){
        convertThemeFromDir(input, options.output || '.mvttc/converted');
    }else {
        convertThemeFromFilePath(input, options.output || `.mvttc/converted/${path.basename(input)}`);
    }
}