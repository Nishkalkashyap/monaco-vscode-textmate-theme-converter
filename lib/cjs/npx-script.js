#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var index_1 = require("./index");
var fs = require("fs-extra");
var path = require("path");
commander_1.program
    .requiredOption('-i, --input <inputPath>', 'Specify a file or a folder')
    .option('-o, --output <outputPath>', 'Specify an output path');
commander_1.program.parse(process.argv);
var options = commander_1.program.opts();
if (options.input) {
    var input = options.input;
    var exists = fs.existsSync(input);
    if (!exists)
        throw Error('The input path does not exists');
    var stats = fs.statSync(input);
    var isDirectory = stats.isDirectory();
    if (isDirectory) {
        index_1.convertThemeFromDir(input, options.output || '.mvttc/converted');
    }
    else {
        index_1.convertThemeFromFilePath(input, options.output || ".mvttc/converted/" + path.basename(input));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnB4LXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ucHgtc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFvQztBQUNwQyxpQ0FBc0U7QUFDdEUsNkJBQStCO0FBQy9CLDJCQUE2QjtBQUU3QixtQkFBTztLQUNKLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsQ0FBQztLQUN2RSxNQUFNLENBQUMsMkJBQTJCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUVqRSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsSUFBTSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxJQUFJLEVBQW1DLENBQUM7QUFFaEUsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFDO0lBQ04sSUFBQSxxQkFBSyxDQUFZO0lBRXhCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBRyxDQUFDLE1BQU07UUFBRSxNQUFNLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRTFELElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLElBQUcsV0FBVyxFQUFDO1FBQ1gsMkJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUMsQ0FBQztLQUNwRTtTQUFLO1FBQ0YsZ0NBQXdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksc0JBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQztLQUNqRztDQUNKIn0=