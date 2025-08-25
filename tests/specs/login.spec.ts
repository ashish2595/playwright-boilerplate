import { test } from '../../fixtures/baseSetup.fixture';

test.use({ testDataPath: "login/login.data.ts", keyName: "validUserData" });
test('Verify valid user login', async ({ testData, loginPage }) => {
  await test.step('Navigate to the application', async () => {
    await loginPage.navigate();
  });
  await test.step(`Login to the application using user name user2demo@mailinator.com`, async () => {
    await loginPage.login(testData.user);
  });
  await test.step('Verify successful login', async () => {
    await loginPage.assertLoginSuccess();
  });
});