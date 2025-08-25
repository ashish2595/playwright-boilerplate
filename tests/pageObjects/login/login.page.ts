import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput;
    private readonly passwordInput;
    private readonly loginButton;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async navigate() {
        await this.page.goto('/sign-in');
    }

    async clickOnSignIn() {
        await this.page.click('text=Sign In');
    }

    async login(user: { email: string, password: string }) {
        await this.usernameInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.loginButton.click();
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL(/tickets/);
    }
}