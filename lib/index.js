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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQ0EsNkJBQStCO0lBQy9CLDJCQUE2QjtJQUk3QixTQUFnQixtQkFBbUIsQ0FBQyxRQUFnQixFQUFFLE1BQWM7UUFBcEUsaUJBb0JDO1FBbEJHLElBQU0sUUFBUSxHQUFHLFVBQU8sUUFBZ0I7Ozs7Ozt3QkFFMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUMxQyxxQkFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBNUIsSUFBSSxDQUFDLFNBQXVCLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTs0QkFDekMsc0JBQU87eUJBQ1Y7d0JBQ3dCLHFCQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFoRCxTQUFTLEdBQVcsQ0FBQyxTQUEyQixDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUNoRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDakQsS0FBSyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM1QyxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQy9DLHFCQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBOzt3QkFBcEUsU0FBb0UsQ0FBQzs7Ozt3QkFFckUsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFHLENBQUMsQ0FBQzs7OzthQUU1QixDQUFBO1FBRUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXBCRCxrREFvQkM7SUFFRCxTQUFnQixZQUFZLENBQUMsS0FBbUI7UUFFNUMsSUFBTSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUM3QyxJQUFNLFdBQVcsR0FBdUM7WUFDcEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixLQUFLLEVBQUUsZUFBZTtZQUN0QixtQkFBbUIsRUFBRSxFQUFFO1NBQzFCLENBQUM7UUFFRixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFFeEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO2dCQUVoQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFckMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbEIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ3BCLFdBQVcsRUFBRSxDQUFDO29CQUNkLE9BQU87aUJBQ1Y7Z0JBSUQsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUNuRCx3Q0FBd0M7b0JBQ3hDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztpQkFDckIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osT0FBTzthQUNWO1lBRUQsV0FBVyxFQUFFLENBQUM7WUFFZCxTQUFTLFdBQVc7Z0JBQ2YsS0FBSyxDQUFDLEtBQWtCLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztvQkFDaEMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO3dCQUNuRCxLQUFLLEVBQUUsS0FBSztxQkFDZixDQUFDLENBQUMsQ0FBQztnQkFDUixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUE1Q0Qsb0NBNENDIn0=