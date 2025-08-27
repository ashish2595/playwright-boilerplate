import { test } from '../../../fixtures/baseSetup.fixture';
test.use({ testDataPath: "tickets/tickets.data.ts", keyName: "searchTicket" });
test('@tickets : Verify search ticket', async ({ testData, allTicketsPage }) => {
  await test.step('Navigate to the all tickets page', async () => {
    await allTicketsPage.navigate(testData.organization);
  });
  await test.step(`Search ticket with name '${testData.ticketName}'`, async () => {
    await allTicketsPage.searchTicket(testData.ticketName);
  });
  await test.step(`Verify ticket status is '${testData.ticketStatus}'`, async () => {
    await allTicketsPage.verifyTicketStatus(testData.ticketName, testData.ticketStatus);
  });
});