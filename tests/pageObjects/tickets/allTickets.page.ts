
import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export type TicketStatus = 'Any' | 'New' | 'In Progress' | 'Resolved' | 'Closed';

export class AllTicketsPage {

    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    #searchInput = () => this.page.locator('[data-testid="ticket-name-search"]');
    #textTicketStatus = (tickeName: string) => this.page.locator(`//*[normalize-space()="${tickeName}"]/ancestor::*[starts-with(@class,"border")]//*[@data-testid="ticket-status"]`);

    async navigate(organization: string) {
        await this.page.goto(organization + '/tickets');
    }

    async searchTicket(ticketName: string) {
        await this.#searchInput().fill(ticketName);
    }

    async verifyTicketStatus(ticketName: string, ticketStatus: TicketStatus) {
        await expect(this.#textTicketStatus(ticketName)).toHaveText(ticketStatus);
    }
}
