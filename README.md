Cheers mate! 🍻

_This document is survived by you! Please help us keep this a living document by updating and improving our documentation._

# Your-App-Name-Goes-Here

## Table of Contents

- [Installation & Startup](#installation-startup)

## Installation & Startup

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Standards & Best Practices

### React

Solving problems with who is responsible for rendering the UI.

Provider pattern, HOC, renderProp

If you think you want to create an HOC. Implement it using a renderProp first. They are more flexible. Those who need the flexibility can use the render prop. Those who want something more simple, can use it as an HOC.

state Reducer Pattern (42:00) - for logic
- redux state like tree, using reducers to maange it's state. Just like redux.
This pattern gives you complete control over the internal state of the component in a, albeit a bit complex, well-managed way.

sync state pattern (46:00) - for logic that needs to manage same state (keep in sync) two or more components
This is controlled props


## Troubleshooting

### Jest test fail with ES2017

If you are the latest release of jest with an earlier version of node, any version below 7.*, you will run into
problems with tests, or units of code under test, that use the latest and greatest ES+ features.

Jest removed a dependency on `babel-polyfill` in early 2017 (no idea which version) which would previously,
as one might expect from the name, polyfill the latest ES standards. There are a couple of listed reasons
for removing this dependency which you can read more about in the resources section below.

As an example, if you use `Object.entries` or `Object.values`, your test will fail with `TypeError` because
methods won't exist _(pssst, they exist in node v7+)_

**Several solutions exist:**

- Update your node version to anything 7.* or greater
- Setup jest to polyfill the specific methods you need
- Import `babel-polyfill`
- Customize your `package.json` or use a `.babelrc` with `babel-polyfill`
- ...some other ways not listed.

#### Resources

- [Jest > Remove auto-inclusion of babel-polyfill #2755](https://github.com/facebook/jest/pull/2755)
- [Jest > Changelog](https://github.com/facebook/jest/blob/cf2b9e80a0b099c2f861660fd9cf589848106fa1/CHANGELOG.md)
- [Jest > Breaking Changes](https://github.com/facebook/jest/blob/e4f7d84568c16f692b08c954183ca524c14eced1/website/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md#breaking-changes)
- [npm > babel-polyfill](https://www.npmjs.com/package/babel-polyfill)
- [tc39 > proposal-object-values-entries > polyfill](https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js)
