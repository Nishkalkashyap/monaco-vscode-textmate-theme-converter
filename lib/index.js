var _this = this;
import * as tslib_1 from "tslib";
import * as fs from 'fs-extra';
import * as path from 'path';
fs.readdirSync('./src/themes').map(function (fileName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var themeFile, theme, out;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.readFile(path.join('./src/themes', fileName))];
            case 1:
                themeFile = (_a.sent()).toString();
                themeFile = themeFile.replace(/(\/\/").+?[\n\r]/g, '');
                theme = JSON.parse(themeFile);
                out = convertTheme(theme);
                fs.ensureFileSync(path.join('./out', fileName));
                return [4 /*yield*/, fs.writeFile(path.join('./out', fileName), JSON.stringify(out))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
export function convertTheme(theme) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBeUNDOztBQXhDRCxPQUFPLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvQixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUc3QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFPLFFBQVE7Ozs7b0JBQ3JCLHFCQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBQTs7Z0JBQTNFLFNBQVMsR0FBVyxDQUFDLFNBQXNELENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNGLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxLQUFLLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVDLEdBQUcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEQscUJBQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7O2dCQUFyRSxTQUFxRSxDQUFDOzs7O0tBQ3pFLENBQUMsQ0FBQztBQUVILE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBbUI7SUFFNUMsSUFBTSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztJQUM3QyxJQUFNLFdBQVcsR0FBdUM7UUFDcEQsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtRQUNwQixLQUFLLEVBQUUsZUFBZTtRQUN0QixtQkFBbUIsRUFBRSxFQUFFO0tBQzFCLENBQUM7SUFFRixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7UUFDeEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO1lBQ2hDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0osT0FBTztTQUNWO1FBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO1lBQ2xCLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbkQsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDIn0=