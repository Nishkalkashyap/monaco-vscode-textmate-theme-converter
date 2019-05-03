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
    // fs.readdirSync('./src/themes').map(async (fileName) => {
    //     let themeFile: string = (await fs.readFile(path.join('./src/themes', fileName))).toString();
    //     themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
    //     const theme: IVSCodeTheme = JSON.parse(themeFile);
    //     const out = convertTheme(theme);
    //     fs.ensureFileSync(path.join('./out', fileName));
    //     await fs.writeFile(path.join('./out', fileName), JSON.stringify(out));
    // });
    function convertThemeFromDir(inputDir, outDir) {
        var _this = this;
        fs.readdirSync(inputDir).map(function (fileName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var themeFile, theme, out;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.readFile(path.join(inputDir, fileName))];
                    case 1:
                        themeFile = (_a.sent()).toString();
                        themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
                        theme = JSON.parse(themeFile);
                        out = convertTheme(theme);
                        fs.ensureFileSync(path.join(outDir, fileName));
                        return [4 /*yield*/, fs.writeFile(path.join(outDir, fileName), JSON.stringify(out))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
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
                monacoThemeRule.push(Object.assign({}, color.settings, {
                    token: color.scope
                }));
                return;
            }
            color.scope.map(function (scope) {
                monacoThemeRule.push(Object.assign({}, color.settings, {
                    token: scope
                }));
            });
        });
        return returnTheme;
    }
    exports.convertTheme = convertTheme;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQ0EsNkJBQStCO0lBQy9CLDJCQUE2QjtJQUs3QiwyREFBMkQ7SUFDM0QsbUdBQW1HO0lBQ25HLDhEQUE4RDtJQUM5RCx5REFBeUQ7SUFDekQsdUNBQXVDO0lBQ3ZDLHVEQUF1RDtJQUN2RCw2RUFBNkU7SUFDN0UsTUFBTTtJQUVOLFNBQWdCLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsTUFBYztRQUFwRSxpQkFTQztRQVJHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQU8sUUFBUTs7Ozs0QkFDZixxQkFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUE7O3dCQUFyRSxTQUFTLEdBQVcsQ0FBQyxTQUFnRCxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUNyRixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDakQsS0FBSyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM1QyxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQy9DLHFCQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBOzt3QkFBcEUsU0FBb0UsQ0FBQzs7OzthQUN4RSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVEQsa0RBU0M7SUFFRCxTQUFnQixZQUFZLENBQUMsS0FBbUI7UUFFNUMsSUFBTSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUM3QyxJQUFNLFdBQVcsR0FBdUM7WUFDcEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixLQUFLLEVBQUUsZUFBZTtZQUN0QixtQkFBbUIsRUFBRSxFQUFFO1NBQzFCLENBQUM7UUFFRixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDeEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO2dCQUNoQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ25ELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztpQkFDckIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osT0FBTzthQUNWO1lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO2dCQUNsQixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ25ELEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUEzQkQsb0NBMkJDIn0=