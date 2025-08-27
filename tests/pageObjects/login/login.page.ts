import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;

    #usernameInput = () => this.page.locator('input[name="email"]');
    #passwordInput = () => this.page.locator('input[name="password"]');
    #loginButton = () => this.page.locator('button[type="submit"]');

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('/sign-in');
    }

    async clickOnSignIn() {
        await this.page.click('text=Sign In');
    }

    async login(user: { email: string, password: string }) {
        await this.#usernameInput().fill(user.email);
        await this.#passwordInput().fill(user.password);
        await this.#loginButton().click();
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL(/tickets/);
    }
}