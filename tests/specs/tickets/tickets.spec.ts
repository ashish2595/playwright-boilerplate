import { test } from '../../../fixtures/baseSetup.fixture';

test.use({ testDataPath: "tickets/tickets.data.ts", keyName: "searchTicket" });
test('@tickets : Verify search ticket', async ({ testData, loginPage, allTicketsPage }) => {
  await test.step('Navigate to the application', async () => {
    await loginPage.navigate();
  });
  await test.step(`Login to the application using user email '${testData.user.email}'`, async () => {
    await loginPage.login(testData.user);
  });
  await test.step('Verify successful login', async () => {
    await loginPage.assertLoginSuccess();
  });
  await test.step(`Search ticket with name '${testData.ticketName}'`, async () => {
    await allTicketsPage.searchTicket(testData.ticketName);
  });
  await test.step(`Verify ticket status is '${testData.ticketStatus}'`, async () => {
    await allTicketsPage.verifyTicketStatus(testData.ticketName, testData.ticketStatus);
  });
});