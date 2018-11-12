import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const faker = require('faker');
const puppeteer = require('puppeteer');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Paragraph', () => {
  it('renders paragraph correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false,
    });
    let page = await browser.newPage();
  
    page.emulate({
      viewport: {
      width: 500,
      height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3001/');
	  await page.waitForSelector('.Paragraph');

	  const html = await page.$eval('.Paragraph', e => e.innerHTML);
	  expect(html).toBe('Welcome to React');

	  browser.close();
  }, 16000);
});

