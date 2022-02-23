import { expect, test } from '@playwright/test';

const url = 'http://localhost:3000/';

test.beforeEach(async ({ page }) => {
  await page.goto(url);
});

test.describe('App', () => {
  test('clicking on the Logo should navigate to the index page upon click', async ({ page }) => {
    const logoLocator = page.locator('a[data-playwright-id="logo"]');

    await logoLocator.click();
    await page.waitForNavigation({ timeout: 0 });

    expect(page.url()).toEqual(`${url}`);
  });

  test('filters should exist', async ({ page }) => {
    const filtersLocator = page.locator('div[data-playwright-id="filters"]');

    await expect(filtersLocator).toBeVisible();
  });

  test('filters should contain the projects, gateways, from date, to date and generate report buttons', async ({ page }) => {
    const projectsBtnLocator = page.locator('button[data-playwright-id="projectsBtn"]');
    const gatewaysBtnLocator = page.locator('button[data-playwright-id="gatewaysBtn"]');
    const fromDateBtnLocator = page.locator('button[data-playwright-id="fromDateBtn"]');
    const toDateBtnLocator = page.locator('button[data-playwright-id="toDateBtn"]');
    const generateReportBtnLocator = page.locator('button[data-playwright-id="generateReportBtn"]');

    await expect(projectsBtnLocator).toBeVisible();
    await expect(gatewaysBtnLocator).toBeVisible();
    await expect(fromDateBtnLocator).toBeVisible();
    await expect(toDateBtnLocator).toBeVisible();
    await expect(generateReportBtnLocator).toBeVisible();
  });

  test('focusing a dropdown button should display a dropdown menu', async ({ page }) => {
    const projectsBtnLocator = page.locator('button[data-playwright-id="projectsBtn"]');
    const projectsDropdownLocator = projectsBtnLocator.locator('ul');

    await projectsBtnLocator.focus();
    await projectsDropdownLocator.waitFor({ state: 'visible' });

    await expect(projectsDropdownLocator).toBeVisible();
  });

  test('clicking on a datepicker button should display a datepicker', async ({ page }) => {
    const fromDateBtnLocator = page.locator('button[data-playwright-id="fromDateBtn"]');
    const fromDateDatepickerLocator = page.locator('div[role="dialog"]');

    await fromDateBtnLocator.click();
    await fromDateDatepickerLocator.waitFor({ state: 'visible' });

    await expect(fromDateDatepickerLocator).toBeVisible();
  });

  test('we should initially see the NoReports component', async ({ page }) => {
    const noReportsLocator = page.locator('div[data-playwright-id="noReports"]');

    await expect(noReportsLocator).toBeVisible();
  });

  test('all projects, all gateways, from 2022-02-02 to 2022-02-02', async ({ page }) => {
    const fromDateBtnLocator = page.locator('button[data-playwright-id="fromDateBtn"]');
    const fromDateDatepickerLocator = page.locator('div[role="dialog"]');

    await fromDateBtnLocator.click();
    await fromDateDatepickerLocator.waitFor({ state: 'visible' });

    const fromDatePresentationLocator = page.locator('div[role="presentation"]');

    await fromDatePresentationLocator.click();

    const fromDateYearLocator = page.locator('button >> text=2022');

    await fromDateYearLocator.click();

    const fromDateMonthLocator = page.locator('button >> text=Feb');

    await fromDateMonthLocator.click();

    const fromDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await fromDateDayLocator.click();

    await page.locator('div[data-reactroot]').click();
    await fromDateDatepickerLocator.waitFor({ state: 'detached' });

    const toDateBtnLocator = page.locator('button[data-playwright-id="toDateBtn"]');
    const toDateDatepickerLocator = page.locator('div[role="dialog"]');

    await toDateBtnLocator.click();
    await toDateDatepickerLocator.waitFor({ state: 'visible' });

    const toDatePresentationLocator = page.locator('div[role="presentation"]');

    await toDatePresentationLocator.click();

    const toDateYearLocator = page.locator('button >> text=2022');

    await toDateYearLocator.click();

    const toDateMonthLocator = page.locator('button >> text=Feb');

    await toDateMonthLocator.click();

    const toDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await toDateDayLocator.click();

    const generateReportBtnLocator = page.locator('button[data-playwright-id="generateReportBtn"]');

    await generateReportBtnLocator.click();

    expect((await page.locator('div.group >> nth=0').innerText()).trim()).toBe('project 0\nTOTAL: 200 USD');
    expect((await page.locator('div.group >> nth=1').innerText()).trim()).toBe('project 1\nTOTAL: 250 USD');

    await expect(page.locator('text=450 USD')).toBeVisible();
  });

  test('project 0, all gateways, from 2022-02-02 to 2022-02-02', async ({ page }) => {
    const fromDateBtnLocator = page.locator('button[data-playwright-id="fromDateBtn"]');
    const fromDateDatepickerLocator = page.locator('div[role="dialog"]');

    await fromDateBtnLocator.click();
    await fromDateDatepickerLocator.waitFor({ state: 'visible' });

    const fromDatePresentationLocator = page.locator('div[role="presentation"]');

    await fromDatePresentationLocator.click();

    const fromDateYearLocator = page.locator('button >> text=2022');

    await fromDateYearLocator.click();

    const fromDateMonthLocator = page.locator('button >> text=Feb');

    await fromDateMonthLocator.click();

    const fromDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await fromDateDayLocator.click();

    await page.locator('div[data-reactroot]').click();
    await fromDateDatepickerLocator.waitFor({ state: 'detached' });

    const toDateBtnLocator = page.locator('button[data-playwright-id="toDateBtn"]');
    const toDateDatepickerLocator = page.locator('div[role="dialog"]');

    await toDateBtnLocator.click();
    await toDateDatepickerLocator.waitFor({ state: 'visible' });

    const toDatePresentationLocator = page.locator('div[role="presentation"]');

    await toDatePresentationLocator.click();

    const toDateYearLocator = page.locator('button >> text=2022');

    await toDateYearLocator.click();

    const toDateMonthLocator = page.locator('button >> text=Feb');

    await toDateMonthLocator.click();

    const toDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await toDateDayLocator.click();

    const projectsBtnLocator = page.locator('button[data-playwright-id="projectsBtn"]');
    const projectsDropdownLocator = projectsBtnLocator.locator('ul');

    await projectsBtnLocator.focus();
    await projectsDropdownLocator.waitFor({ state: 'visible' });

    const project0Locator = projectsDropdownLocator.locator('li >> nth=1');

    await project0Locator.click();

    const generateReportBtnLocator = page.locator('button[data-playwright-id="generateReportBtn"]');

    await generateReportBtnLocator.click();

    expect((await page.locator('div.group >> nth=0').innerText()).trim()).toBe('gateway 0\nTOTAL: 0 USD');
    expect((await page.locator('div.group >> nth=1').innerText()).trim()).toBe('gateway 1\nTOTAL: 200 USD');

    await expect(page.locator('text=PROJECT TOTAL: 200 USD')).toBeVisible();
  });

  test('all projects, gateway 0, from 2022-02-02 to 2022-02-02', async ({ page }) => {
    const fromDateBtnLocator = page.locator('button[data-playwright-id="fromDateBtn"]');
    const fromDateDatepickerLocator = page.locator('div[role="dialog"]');

    await fromDateBtnLocator.click();
    await fromDateDatepickerLocator.waitFor({ state: 'visible' });

    const fromDatePresentationLocator = page.locator('div[role="presentation"]');

    await fromDatePresentationLocator.click();

    const fromDateYearLocator = page.locator('button >> text=2022');

    await fromDateYearLocator.click();

    const fromDateMonthLocator = page.locator('button >> text=Feb');

    await fromDateMonthLocator.click();

    const fromDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await fromDateDayLocator.click();

    await page.locator('div[data-reactroot]').click();
    await fromDateDatepickerLocator.waitFor({ state: 'detached' });

    const toDateBtnLocator = page.locator('button[data-playwright-id="toDateBtn"]');
    const toDateDatepickerLocator = page.locator('div[role="dialog"]');

    await toDateBtnLocator.click();
    await toDateDatepickerLocator.waitFor({ state: 'visible' });

    const toDatePresentationLocator = page.locator('div[role="presentation"]');

    await toDatePresentationLocator.click();

    const toDateYearLocator = page.locator('button >> text=2022');

    await toDateYearLocator.click();

    const toDateMonthLocator = page.locator('button >> text=Feb');

    await toDateMonthLocator.click();

    const toDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await toDateDayLocator.click();

    const gatewaysBtnLocator = page.locator('button[data-playwright-id="gatewaysBtn"]');
    const gatewaysDropdownLocator = gatewaysBtnLocator.locator('ul');

    await gatewaysBtnLocator.focus();
    await gatewaysDropdownLocator.waitFor({ state: 'visible' });

    const gateway0Locator = gatewaysDropdownLocator.locator('li >> nth=1');

    await gateway0Locator.click();

    const generateReportBtnLocator = page.locator('button[data-playwright-id="generateReportBtn"]');

    await generateReportBtnLocator.click();

    expect((await page.locator('div.group >> nth=0').innerText()).trim()).toBe('project 0\nTOTAL: 0 USD');
    expect((await page.locator('div.group >> nth=1').innerText()).trim()).toBe('project 1\nTOTAL: 0 USD');

    await expect(page.locator('text=GATEWAY TOTAL: 0 USD')).toBeVisible();
  });

  test('project 1, gateway 1, from 2022-02-02 to 2022-02-02', async ({ page }) => {
    const fromDateBtnLocator = page.locator('button[data-playwright-id="fromDateBtn"]');
    const fromDateDatepickerLocator = page.locator('div[role="dialog"]');

    await fromDateBtnLocator.click();
    await fromDateDatepickerLocator.waitFor({ state: 'visible' });

    const fromDatePresentationLocator = page.locator('div[role="presentation"]');

    await fromDatePresentationLocator.click();

    const fromDateYearLocator = page.locator('button >> text=2022');

    await fromDateYearLocator.click();

    const fromDateMonthLocator = page.locator('button >> text=Feb');

    await fromDateMonthLocator.click();

    const fromDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await fromDateDayLocator.click();

    await page.locator('div[data-reactroot]').click();
    await fromDateDatepickerLocator.waitFor({ state: 'detached' });

    const toDateBtnLocator = page.locator('button[data-playwright-id="toDateBtn"]');
    const toDateDatepickerLocator = page.locator('div[role="dialog"]');

    await toDateBtnLocator.click();
    await toDateDatepickerLocator.waitFor({ state: 'visible' });

    const toDatePresentationLocator = page.locator('div[role="presentation"]');

    await toDatePresentationLocator.click();

    const toDateYearLocator = page.locator('button >> text=2022');

    await toDateYearLocator.click();

    const toDateMonthLocator = page.locator('button >> text=Feb');

    await toDateMonthLocator.click();

    const toDateDayLocator = page.locator('button[aria-label="Feb 2, 2022"]');

    await toDateDayLocator.click();

    const projectsBtnLocator = page.locator('button[data-playwright-id="projectsBtn"]');
    const projectsDropdownLocator = projectsBtnLocator.locator('ul');

    await projectsBtnLocator.focus();
    await projectsDropdownLocator.waitFor({ state: 'visible' });

    const project1Locator = projectsDropdownLocator.locator('li >> nth=2');

    await project1Locator.click();

    const gatewaysBtnLocator = page.locator('button[data-playwright-id="gatewaysBtn"]');
    const gatewaysDropdownLocator = gatewaysBtnLocator.locator('ul');

    await gatewaysBtnLocator.focus();
    await gatewaysDropdownLocator.waitFor({ state: 'visible' });

    const gateway1Locator = gatewaysDropdownLocator.locator('li >> nth=2');

    await gateway1Locator.click();

    const generateReportBtnLocator = page.locator('button[data-playwright-id="generateReportBtn"]');

    await generateReportBtnLocator.click();

    expect((await page.locator('tbody').innerText()).trim()).toBe('2022-02-02\t3\t250 USD');

    await expect(page.locator('text=TOTAL: 250 USD')).toBeVisible();
  });
});
