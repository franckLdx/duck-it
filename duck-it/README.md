# duck-it
A duck duck go client for javascript/typescript

## Examples
```javascript
async function get() {
  const result = await duckIt('bart simpsons');
  console.log(result.data.AbstractText);
}
```

* duckIt uses [axios](https://github.com/axios/axios) as peer dependencies and return an AxiosResponse:
```javascript
const result = await duckIt('bart simpsons');
```

* duckIt can be called with an options object, eahc item is optional:
  * appName: an application name, default duck-it
  * format: received format data, possible values: 'json' or 'xml', default 'json'
  * parentalFilter: parental filter activated or not, possible values 'Activated', 'Moderate' and 'Deactivated', default: 'Activated'
  * noRedirect: boolean, true to skip HTTP redirects
  * noHtml: boolean, true to remove HTML from text
  * skipDisambig: boolean, true to skip disambiguation
(for information about this options see [Duck Duck GO API documentation](https://api.duckduckgo.com/api)