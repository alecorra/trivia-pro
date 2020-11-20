module.exports = {
  "roots": [
      "<rootDir>/src/"
  ],
  "transform": {
      '^.+\\.tsx?$': 'ts-jest'
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    '\\.(css|scss|png|jpg|jpeg)$': '<rootDir>/src/nonCodeMock.ts',
    "\\.svg": "<rootDir>/src/svgMock.ts"
  },
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}
