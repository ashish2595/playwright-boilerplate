import { test } from '../../fixtures/baseSetup.fixture';


test('Verify valid user login', async ({ loginPage }) => {
  await test.step('Navigate to the application', async () => {
    await loginPage.navigate();
  });
  await test.step(`Login to the application using user name user2demo@mailinator.com`, async () => {
    await loginPage.login({ username: 'user2demo@mailinator.com', password: 'Demo#1234' });
  });
  await test.step('Verify successful login', async () => {
    await loginPage.assertLoginSuccess();
  });
});