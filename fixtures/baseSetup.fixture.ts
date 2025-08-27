import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../tests/pageObjects/login/login.page";
import path from "path";
import { AllTicketsPage } from "../tests/pageObjects/tickets/allTickets.page";

type Options = {
    testDataPath: string;
    keyName: string;
    testData: any;
    loginPage: LoginPage;
    allTicketsPage: AllTicketsPage;
};

export const test = base.extend<Options>({
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
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    allTicketsPage: async ({ page }, use) => {
        await use(new AllTicketsPage(page));
    },
});

export { expect };