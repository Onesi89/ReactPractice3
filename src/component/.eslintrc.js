module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        // typescript 표준 규칙 모음
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        // import 관련 규칙 모음
        "plugin:prettier/recommended",
        // prettier 관련 규칙 모음
    ],
    parserOptions: {
        ecmaVersion: 2018,
        project: ["./tsconfig.json"],
        // tsconfig 파일의 경로를 참조 해줍니다.
        // 기준은 root 입니다.
    },
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "prefer-const": "off",
    },
};
