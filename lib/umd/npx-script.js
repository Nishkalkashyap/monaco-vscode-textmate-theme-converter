#! /usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "commander", "./index", "fs-extra", "path"], factory);
    }
})(function (require, exports) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnB4LXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ucHgtc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNBLHVDQUFvQztJQUNwQyxpQ0FBc0U7SUFDdEUsNkJBQStCO0lBQy9CLDJCQUE2QjtJQUU3QixtQkFBTztTQUNKLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsQ0FBQztTQUN2RSxNQUFNLENBQUMsMkJBQTJCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUVqRSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsSUFBTSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxJQUFJLEVBQW1DLENBQUM7SUFFaEUsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFDO1FBQ04sSUFBQSxxQkFBSyxDQUFZO1FBRXhCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBRyxDQUFDLE1BQU07WUFBRSxNQUFNLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRTFELElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUcsV0FBVyxFQUFDO1lBQ1gsMkJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUMsQ0FBQztTQUNwRTthQUFLO1lBQ0YsZ0NBQXdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksc0JBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQztTQUNqRztLQUNKIn0=