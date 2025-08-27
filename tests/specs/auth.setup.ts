import { test as setup } from '../../fixtures/baseSetup.fixture';
import path from 'path';

const authFile = path.join(process.cwd(), 'playwright/.auth/user.json');
setup.use({ testDataPath: "tickets/tickets.data.ts", keyName: "searchTicket" });
setup('authenticate', async ({ testData, page, loginPage }) => {
  await loginPage.navigate();
  await loginPage.login(testData.user);
  await loginPage.assertLoginSuccess();
  await page.context().storageState({ path: authFile });
});