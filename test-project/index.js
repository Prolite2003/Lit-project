import {html, render} from 'https://unpkg.com/lit-html?module';

// Decalre a template
const myTemplate = html`<div>Hello World</div>`;

// define a template function
const myTemplate = (name) => html`<div>Hello ${name}</div>`;

// Render the template
render(myTemplate('world'), document.body);

// ... Later on ...
// Render the template with different data
render(myTemplate('lit-html'), document.body);

// html`<h1>Test</h1>`;