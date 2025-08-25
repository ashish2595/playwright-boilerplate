import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../tests/pageObjects/login/login.page";
import fs from "fs";
import path from "path";

type Options = {
    testDataPath: string;
    keyName: string;
    testData: any;
    loginPage: LoginPage;

};

export const test = base.extend<Options>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    testDataPath: ["", { option: true }],
    keyName: ["", { option: true }],

    testData: async ({ testDataPath, keyName }, use) => {
        let data = {};
        if (testDataPath) {
            // Prepend env to the testDataPath
            const env = process.env.ENV!!;
            const modulePath = path.resolve(__dirname, `../tests/testData/${env}/${testDataPath}`);
            // Use require for CommonJS compatibility
            // Remove .ts extension for require
            const requirePath = modulePath.replace(/\.ts$/, '');
            const parsedData = require(requirePath);
            data = parsedData[keyName];
        }
        await use(data);
    },
});

export { expect };