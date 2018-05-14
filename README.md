Cheers mate! 🍻

_This document is survived by you! Please help us keep this a living document by updating and improving our documentation._

# Your-App-Name-Goes-Here

## Table of Contents

- [Installation & Startup](#installation-startup)


## Installation & Startup

This project was bootstrapped with [Create React App](create-react-app).


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

### Testing

The documenation listed here is specific to the project starter. To view a more broad set of testing standards, view [Test Standards](https://github.com/jagretz/docs/tree/master/javascript/testing) and possibly other javascript testing information.

For react + redux apps and a fantastic article on ["how to test react components"](https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22) from freecodecamp you can use as
a great introduction.

This project takes advantage of the following testing tools:

- [Jest](https://facebook.github.io/jest/docs/en/expect.html#content) is used to test all JavaScript code. It includes test assertions, a powerful mocking library, and integration with istanbul for test coverage reporting.
- [Enzyme](http://airbnb.io/enzyme/docs/api/index.html) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
- [Istanbul](https://istanbul.js.org/) is a code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. This is integrated with Jest.

If our test setup and configuration interests you, or if there is ever a need to add to it, you can read up on "how" and "why" the testing framework is configured. Documentation for test setup and configuration is located within our [test config directory](./jestSetup/README.md).

#### Test Coverage

Configuration for these metrics is maintained inside package.json. Jest allows you to maintain a separate configuation file, however because we bootstrap the app with [create-react-app](create-react-app), the jest configuration must be maintained within the `package.json` as a top-level property. In order to override this we would need to extend the existing webpack configuration for testing with our own implementation.

Jest by default will run in a web environment using `jsdom`. Thought you might have noticed we include a specific `--env=jsdom` flag with our test scripts. This is another side effect from extending create-react-app which changes the default environemnt to node for improved performance. Not a big deal, but it's important to know why.

## Troubleshooting

### package.json re-formatting on install

With earlier versions of npm, whenever you install a dependency the `package.json` will reformat to use a 2-space indentation.
This is a known issue with earlier versions of npm, specifically `npm@4.*`. Starting with `npm@5.0.0` this is no longer an issue.

For reference, see:
- [github issue 5694 comment](https://github.com/npm/npm/issues/5694#issuecomment-307142476)
- [Twitter noise](https://twitter.com/maybekatz/status/860690502932340737)
- [npmjs blog](http://blog.npmjs.org/post/161081169345/v500)

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

<!-- anchors signatures for repeated links -->

[create-react-app]: https://github.com/facebookincubator/create-react-app
[react-app-rewired]: https://github.com/timarney/react-app-rewired
[css-modules]: https://github.com/css-modules/css-modules