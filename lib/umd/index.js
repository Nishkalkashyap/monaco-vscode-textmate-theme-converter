(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "fs-extra", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var fs = require("fs-extra");
    var path = require("path");
    function convertThemeFromFilePath(inputFilePath, outputFilePath) {
        var exists = fs.existsSync(inputFilePath);
        if (!exists)
            throw Error('Filepath does not exists');
        var stats = fs.statSync(inputFilePath);
        var isFile = stats.isFile();
        if (!isFile)
            throw Error('Expected an input file path, got a directory');
        var themeFile = fs.readFileSync(inputFilePath).toString();
        themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
        var theme = JSON.parse(themeFile);
        var convertedTheme = convertTheme(theme);
        fs.ensureFileSync(outputFilePath);
        fs.writeFileSync(outputFilePath, JSON.stringify(convertedTheme, null, 4));
    }
    exports.convertThemeFromFilePath = convertThemeFromFilePath;
    function convertThemeFromDir(inputDir, outDir) {
        var _this = this;
        var callBack = function (fileName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var filePath, themeFile, theme, out, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        filePath = path.join(inputDir, fileName);
                        return [4 /*yield*/, fs.stat(filePath)];
                    case 1:
                        if ((_a.sent()).isDirectory()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fs.readFile(filePath)];
                    case 2:
                        themeFile = (_a.sent()).toString();
                        themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
                        theme = JSON.parse(themeFile);
                        out = convertTheme(theme);
                        fs.ensureFileSync(path.join(outDir, fileName));
                        return [4 /*yield*/, fs.writeFile(path.join(outDir, fileName), JSON.stringify(out))];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        throw new Error(err_1);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fs.readdirSync(inputDir).map(callBack);
    }
    exports.convertThemeFromDir = convertThemeFromDir;
    function convertTheme(theme) {
        var monacoThemeRule = [];
        var returnTheme = {
            inherit: false,
            base: 'vs-dark',
            colors: theme.colors,
            rules: monacoThemeRule,
            encodedTokensColors: []
        };
        theme.tokenColors.map(function (color) {
            if (typeof color.scope == 'string') {
                var split = color.scope.split(',');
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
                if (color.scope) {
                    color.scope.map(function (scope) {
                        monacoThemeRule.push(Object.assign({}, color.settings, {
                            token: scope
                        }));
                    });
                }
            }
        });
        return returnTheme;
    }
    exports.convertTheme = convertTheme;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQ0EsNkJBQStCO0lBQy9CLDJCQUE2QjtJQUk3QixTQUFnQix3QkFBd0IsQ0FBQyxhQUFxQixFQUFFLGNBQXNCO1FBQ2xGLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsSUFBRyxDQUFDLE1BQU07WUFBRSxNQUFNLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXBELElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLElBQUcsQ0FBQyxNQUFNO1lBQUUsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUV4RSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQU0sS0FBSyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFkRCw0REFjQztJQUVELFNBQWdCLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsTUFBYztRQUFwRSxpQkFv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