import { test as base } from '@playwright/test';
import {LoginPage} from '../tests/pageObjects/login/login.page';
import fs from 'fs';
import path from 'path';

export const test = base.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
});

export const testData = base