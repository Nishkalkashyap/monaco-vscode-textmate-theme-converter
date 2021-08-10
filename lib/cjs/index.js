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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkJBQStCO0FBQy9CLDJCQUE2QjtBQUk3QixTQUFnQix3QkFBd0IsQ0FBQyxhQUFxQixFQUFFLGNBQXNCO0lBQ2xGLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsSUFBRyxDQUFDLE1BQU07UUFBRSxNQUFNLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBRXBELElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLElBQUcsQ0FBQyxNQUFNO1FBQUUsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUV4RSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFELFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELElBQU0sS0FBSyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFkRCw0REFjQztBQUVELFNBQWdCLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsTUFBYztJQUFwRSxpQkFvQkM7SUFsQkcs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