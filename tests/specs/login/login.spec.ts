import { test } from '../../../fixtures/baseSetup.fixture';

test.use({ testDataPath: "login/login.data.ts", keyName: "validUserData" });
test('@login : Verify valid user login', async ({ testData, loginPage, allTicketsPage }) => {
  await test.step('Navigate to the application', async () => {
    await allTicketsPage.navigate(testData.organization);
  });
  await test.step('Verify successful login', async () => {
    await loginPage.assertLoginSuccess();
  });
});