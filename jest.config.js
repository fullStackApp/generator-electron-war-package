module.exports = {
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
	"json"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "/__tests__/.*\\.(ts|tsx|js)$",
  "automock": false,
  "testPathIgnorePatterns": ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  "testResultsProcessor": "jest-sonar-reporter",
  "testURL": "http://localhost/"
}
