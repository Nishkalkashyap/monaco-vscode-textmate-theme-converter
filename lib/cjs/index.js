"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = require("fs-extra");
var path = require("path");
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
            color.scope.map(function (scope) {
                monacoThemeRule.push(Object.assign({}, color.settings, {
                    token: scope
                }));
            });
        }
    });
    return returnTheme;
}
exports.convertTheme = convertTheme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkJBQStCO0FBQy9CLDJCQUE2QjtBQUk3QixTQUFnQixtQkFBbUIsQ0FBQyxRQUFnQixFQUFFLE1BQWM7SUFBcEUsaUJBb0JDO0lBbEJHLElBQU0sUUFBUSxHQUFHLFVBQU8sUUFBZ0I7Ozs7OztvQkFFMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMxQyxxQkFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOztvQkFBNUIsSUFBSSxDQUFDLFNBQXVCLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDekMsc0JBQU87cUJBQ1Y7b0JBQ3dCLHFCQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUE7O29CQUFoRCxTQUFTLEdBQVcsQ0FBQyxTQUEyQixDQUFDLENBQUMsUUFBUSxFQUFFO29CQUNoRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDakQsS0FBSyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM1QyxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLHFCQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBOztvQkFBcEUsU0FBb0UsQ0FBQzs7OztvQkFFckUsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFHLENBQUMsQ0FBQzs7OztTQUU1QixDQUFBO0lBRUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQXBCRCxrREFvQkM7QUFFRCxTQUFnQixZQUFZLENBQUMsS0FBbUI7SUFFNUMsSUFBTSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztJQUM3QyxJQUFNLFdBQVcsR0FBdUM7UUFDcEQsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtRQUNwQixLQUFLLEVBQUUsZUFBZTtRQUN0QixtQkFBbUIsRUFBRSxFQUFFO0tBQzFCLENBQUM7SUFFRixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7UUFFeEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO1lBRWhDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixXQUFXLEVBQUUsQ0FBQztnQkFDZCxPQUFPO2FBQ1Y7WUFJRCxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ25ELHdDQUF3QztnQkFDeEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0osT0FBTztTQUNWO1FBRUQsV0FBVyxFQUFFLENBQUM7UUFFZCxTQUFTLFdBQVc7WUFDZixLQUFLLENBQUMsS0FBa0IsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO2dCQUNoQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ25ELEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDO0FBNUNELG9DQTRDQyJ9