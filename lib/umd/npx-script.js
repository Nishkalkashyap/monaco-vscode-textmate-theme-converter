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
        .version("0.1.7")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnB4LXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ucHgtc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNBLHVDQUFvQztJQUNwQyxpQ0FBc0U7SUFDdEUsNkJBQStCO0lBQy9CLDJCQUE2QjtJQUU3QixtQkFBTztTQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDaEIsY0FBYyxDQUFDLHlCQUF5QixFQUFFLDRCQUE0QixDQUFDO1NBQ3ZFLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBRWpFLG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixJQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLElBQUksRUFBbUMsQ0FBQztJQUVoRSxJQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUM7UUFDTixJQUFBLHFCQUFLLENBQVk7UUFFeEIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFHLENBQUMsTUFBTTtZQUFFLE1BQU0sS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFMUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBRyxXQUFXLEVBQUM7WUFDWCwyQkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3BFO2FBQUs7WUFDRixnQ0FBd0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxzQkFBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFDO1NBQ2pHO0tBQ0oifQ==