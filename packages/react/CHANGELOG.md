# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.0-rc.1](https://github.com/wwnorton/design-system/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2020-10-02)

### 🐛 Bug Fixes

- **react:** bind value to the BaseInput in TextField ([1a209f4](https://github.com/wwnorton/design-system/commit/1a209f40f521521739d44f5f4597250aa28798a3))

## [1.0.0-rc.0](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.3...v1.0.0-rc.0) (2020-09-25)

### ⚠ BREAKING CHANGES

- **react:** `TextField` can no longer be uncontrolled.
  To use in an uncontrolled way, use the new `TextFieldUncontrolled`.

### ✨ Features

- **react:** add uncontrolled variant of TextField ([8cc63ca](https://github.com/wwnorton/design-system/commit/8cc63cadf36c38e1c7960291a5f59f803115b432))

### ♻️ Refactor

- **react:** use updated TextField in stories and tests ([3507dc2](https://github.com/wwnorton/design-system/commit/3507dc2803a2c775a2155bd3d362a18da43def0b))

### 🐛 Bug Fixes

- **react:** allow >maxLength text field input ([84c97e5](https://github.com/wwnorton/design-system/commit/84c97e5f8863b0569e0561e0ac3ceabe48e9bf67)), closes [#11](https://github.com/wwnorton/design-system/issues/11)
- **react:** correctly focus the dropdown button on close ([51ad297](https://github.com/wwnorton/design-system/commit/51ad297b6066f70c4a71c6ae8641bf4057a33086))
- **react:** make TextField and input fully controlled ([a39ba8d](https://github.com/wwnorton/design-system/commit/a39ba8dafb74f9f5d22c6828a49c26f1a538290a))

### 🛠 Maintenance

- remove empty files ([eea1aa2](https://github.com/wwnorton/design-system/commit/eea1aa2b6f6fe44b414f830c0cfa0b8ab96d9e23))
- remove non-existent imports ([dcc00a7](https://github.com/wwnorton/design-system/commit/dcc00a772c42d8a159a50ab516f25c97b49d2539))
- **storybook:** clarify aria-label story ([f3ac9f6](https://github.com/wwnorton/design-system/commit/f3ac9f6137bf4b3791792a1a2f8372c7b2ff6ad2))
- update storybook core config ([1043cbb](https://github.com/wwnorton/design-system/commit/1043cbb19740210c4dc87ae89106b5a33f9725ad))
- use full color tokens ([7807c5d](https://github.com/wwnorton/design-system/commit/7807c5d140bd8c942428b22058381abbc7f7b24a))

### 📝 Documentation

- update react readme ([84bc525](https://github.com/wwnorton/design-system/commit/84bc525878b759c34fabaa56a63597815c65f32c))
- **storybook:** add focus-visible polyfill ([16598ea](https://github.com/wwnorton/design-system/commit/16598ea15a54034cff295a6a180c836d02a9e0ee))

## [1.0.0-beta.3](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-08-17)

### ⚠ BREAKING CHANGES

- **react:** The `Disclosure` prop `variant` has been removed in favor of the boolean `panel` since it is either in panel mode or it is not.
- **react:** The `Disclosure` prop `animate` has been inverted and renamed `reducedMotion`. This allows developers to imperatively declare `reducedMotion` when they want to disable animations on the component.
- **react:** The `Disclosure` prop `open` has been renamed `isOpen` to better align with other openable components.
- **react:** The `Disclosure` prop `updateOnResize` has been removed entirely as sizing considerations will be handled automatically.
- **react:** The `Disclosure` now allows any icon to be used as the "marker" via the `marker` prop. Additionally, the marker can be displayed on the left or right via `markerPosition`.
- **react:** The `Disclosure` is now a forwardRef, so the `detailsRef` prop has been removed. Use `ref` instead.
- **react:** renamed `FieldInfo` prop: `labelIs` → `labelTag`

### ✨ Features

- **react:** add list & subdirectory icons ([0d48d25](https://github.com/wwnorton/design-system/commit/0d48d252b4b4f3c92c2b319d81ccbfdbcb0ad1a8)), closes [gitlab#154](https://github.com/wwnorton/gitlab/issues/154)
- **react:** add NDS context & corresponding hook ([4c73e07](https://github.com/wwnorton/design-system/commit/4c73e074a0ecf80db164bd9f7fc1bfd7fa1c01fc))
- **react:** add persistent client storage ([17bca75](https://github.com/wwnorton/design-system/commit/17bca757444dfaf3f1e0d05232f328b33872e4d6))
- **react:** add useColorScheme hook ([7dfd6ff](https://github.com/wwnorton/design-system/commit/7dfd6ff0695075009d0a28663be03a4ffbf20ce0))

### 📝 Documentation

- **storybook:** reorder panel addons ([bb8dba8](https://github.com/wwnorton/design-system/commit/bb8dba83382f1b8d90dca79a0962503307be0aa2))

### 🛠 Maintenance

- remove unused testing helper ([9f97661](https://github.com/wwnorton/design-system/commit/9f97661e345126aaf483ef219e2a3e120099ee8d))
- reset should not return anything ([94caa5b](https://github.com/wwnorton/design-system/commit/94caa5b660ad4fd8b2e68a7bd8a8790a3e0a12d7))
- **react:** remove unused debounce package ([bcef6ce](https://github.com/wwnorton/design-system/commit/bcef6ce5a09ffa0c9075eacdbe762d78e18015bb))
- fix spelling errors ([caa8284](https://github.com/wwnorton/design-system/commit/caa8284a7952cbc802204ca1953ffa35aebb9691))
- re-add missing addons ([9b2ea80](https://github.com/wwnorton/design-system/commit/9b2ea8007c53cdb1a74459706ac7fb536e8c0da5))
- suppress console warn ([cfb482c](https://github.com/wwnorton/design-system/commit/cfb482c43611f354c41973cb481f542fce22aa86))
- use the same propFilter for storybook & docs ([26b4f08](https://github.com/wwnorton/design-system/commit/26b4f08d66e88470517decd88ee3bd096f927e06))
- **dev-deps:** update storybook to v6 ([ee7a662](https://github.com/wwnorton/design-system/commit/ee7a6625582deef355da77221c7cfe19497ce186))
- **react:** code-escape HTML in comment ([989178e](https://github.com/wwnorton/design-system/commit/989178e13a23a3117f0f249c33f90e7750cd9597))
- **storybook:** use fixed port for dev ([ac32b26](https://github.com/wwnorton/design-system/commit/ac32b2624ae94f1a0a5b75f2c712859bf8b51ba0))

### ♻️ Refactor

- **react:** labelIs → labelTag ([d1f276b](https://github.com/wwnorton/design-system/commit/d1f276b6f7987cfba491573db1555086dee5260b))
- **react:** make canUseDOM a standalone export ([e4fb53c](https://github.com/wwnorton/design-system/commit/e4fb53c646af9f6280a5411c942affc3f1f4ebda))
- **react:** remove transitionEnd callback ([a8c7d13](https://github.com/wwnorton/design-system/commit/a8c7d131cbc5c214b525ff2e8e8e4d667604991c))
- **react:** reorder button props ([99bb417](https://github.com/wwnorton/design-system/commit/99bb417bea3490577db83a409fddd69fd1b399fc))
- **react:** rewrite disclosure as a function component ([4a12981](https://github.com/wwnorton/design-system/commit/4a12981776711488f6c8310b10bf81f8d09fa83a))
- **react:** simplify transition parsing ([1986156](https://github.com/wwnorton/design-system/commit/1986156f3978c1192f64177af0bb99e11c170bd2))
- **storybook:** update disclosure stories ([3fc58f6](https://github.com/wwnorton/design-system/commit/3fc58f65e8b9274ab8da0781c4760d2d914c233f))
- add canUseDOM to help with SSR ([663705e](https://github.com/wwnorton/design-system/commit/663705ec9bb4ce23ba327f88af78c37a2fe6afc7))
- move `children` description to the prop ([d18ffa9](https://github.com/wwnorton/design-system/commit/d18ffa985e5bfc9975306b92397c2b1126aee90c))
- move icon store to Icon component ([ee247b7](https://github.com/wwnorton/design-system/commit/ee247b78f7400500f62090643562f71273052397))
- move remaining hooks to standalone files ([7485511](https://github.com/wwnorton/design-system/commit/7485511ee0d2be923bd58a4aea862fb407ad827a))
- prefer storybook layout for centering ([9a1d5be](https://github.com/wwnorton/design-system/commit/9a1d5be7ab5725550cab392c75ae6913135f5d31))
- **react:** move token helpers to useToken hook ([1cffc76](https://github.com/wwnorton/design-system/commit/1cffc7619002abf76ee741bc09abcd45e6b0a617))
- **react:** remove idGen helper ([8e96643](https://github.com/wwnorton/design-system/commit/8e96643895bbcf09f7dec44ad4aece101b1d3994))
- **react:** use markdown links in ts docs ([7adbcc0](https://github.com/wwnorton/design-system/commit/7adbcc0d6eb765a17cceeb98d3d6160e9cb2b7d2))
- **react:** use more readable `tagName` and avoid `is` HTML conflict ([b02d6e0](https://github.com/wwnorton/design-system/commit/b02d6e08234ba8989943e37ca81cf13f5e369297))
- **react:** use updated hooks and utilities in all components ([4daac91](https://github.com/wwnorton/design-system/commit/4daac91250f9b0a08837ab2dc171aa25abe5b685))
- **storybook:** update button stories for v6 ([9172070](https://github.com/wwnorton/design-system/commit/9172070dead69f3d9d6308ebaf723805f2071d2a))
- prevent multi-prefixing ([2f4c8fb](https://github.com/wwnorton/design-system/commit/2f4c8fbe602583eb4621b63391dc5837597b4a31))
- remove unused utility ([8328440](https://github.com/wwnorton/design-system/commit/83284409c4bb794a74dbbfbefe0891890c5121d1))
- update main exports ([6784a0c](https://github.com/wwnorton/design-system/commit/6784a0ca952c47d2799ff57c440d1ad96478b952))
- use updated hooks and utilities in stories ([f570537](https://github.com/wwnorton/design-system/commit/f570537ea5edfb88fe0fbb48bf8d061c19e46cfd))

# [1.0.0-beta.2](https://github.com/wwnorton/design-system/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-08-07)

- feat(react)!: provide access to core tooltip props in components that use tooltips ([e7df6fd](https://github.com/wwnorton/design-system/commit/e7df6fd0bc4042d4b72a7526a15c18d976ac0e65))

### BREAKING CHANGES

- the `hideTooltipDelay` prop that was used in `Button`/`IconButton`/`Switch` has been removed. Use `tooltipProps={{ hideDelay: n }}` to replicate the behavior.

# [1.0.0-beta.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2020-07-30)

### Bug Fixes

- **react:** ensure that returnFocus doesn't have side effects ([eec5d6c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/eec5d6c9201809db85afdf1d89804ee5bc1613fd))
- **react:** move deprecated keypress listener to keydown ([6306316](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6306316d3d0e882599785fff88b63bea615636e2))
- **react:** render FieldInfo children in a fragment ([266e0d8](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/266e0d88a082848b9c523b0bddf2c69607a330b1))
- **react:** SVGElement does not exist on global ([f950cce](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f950cce50435d0de0efd0139182f401f0da97eda))

### Features

- **react:** explicitly disallow click listeners on icons ([10066de](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/10066de64fd0a8e58f09791e7a04474a2e942212))

* chore!: update the scope (nds -> wwnds) ([1c10f9f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/1c10f9fe79dd10b8b6d518e5a1d0e47b4643b5e1))

### BREAKING CHANGES

- The design system scope is now `@wwnds`. Uninstall `@nds/{core,react}` and reinstall `@wwnds/{core,react}` to update and then change all imports to use the new package names.

# [1.0.0-beta.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.4...v1.0.0-beta.0) (2020-07-17)

### Bug Fixes

- **a11y:** dropdown should not have aria-expanded ([fdb6c09](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/fdb6c09445ac71b8e92ec4774c62049489bc8c5d))
- **react:** clear timeout on cleanup to prevent memory leak ([f1b991e](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f1b991e3093ad452f5448f81eb556ac7856a633b))
- **react:** remove the path from the a11y tree to prevent double speak ([4f2b5ca](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/4f2b5ca59648421646ecd28669b4497dca695fba))

### Code Refactoring

- TextField uses children for its label ([413649f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/413649f99f35fc4e67922dac4720c10699c25315))
- **react:** rewrite checkbox as forwardRef ([6f313c0](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6f313c0e1c77f9d91956a599dd2b314a711e423f))
- include close button by default ([7b44d6c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7b44d6cd14a03368e405fef6551eebd98e457239))
- **react:** remove focus callbacks ([fbfeb26](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/fbfeb26cf6521330176207d2726220008754c33b))
- **react:** simplify user-defined initial focus ([2c228b0](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2c228b059a5fd992b427a1f35a44fd1d241f9a5b))
- extend other field components ([09d5bc4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/09d5bc49fc4848719d7a0a405fa101ab57bfab94))

### Features

- **react:** add CheckboxGroup ([6645d6d](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6645d6d5786814c910c1fb7623a5299037e28acd))
- **react:** add Choices container for easier selection control ([5422169](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/54221692127a175a048419f2c152221043b3f95a))
- **react:** add className prefixing to all components ([05d8c4d](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/05d8c4d5402a41a29faab94ca6571cac4c0b4c0f)), closes [#123](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/123)
- **react:** add color & size props to icon ([2b41c21](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2b41c213926364d23e13eb0e626c7a1d417f9669))
- **react:** add global configuration ([43dab2c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/43dab2c84cba9362ce32e5372de5cdb61ce45d70))
- **react:** add hook to use props as state ([e24e1ab](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e24e1ab43fa1760ef52da37545028ea75fd6b3a5))
- **react:** add LiveRegion component ([6bc907f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6bc907feb0a90bdf4627e8b2a30fb0b1061cc04d))
- **react:** add modal props to allow sticky header/footer ([7da5725](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7da572522cc32aea4d8f8f25869338583d21b2ad))
- **react:** add RadioGroup ([685eeeb](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/685eeeb304bd8af75ace7d547237477781a7a59a))
- **react:** add screen reader-only helper styling ([7b2d4d6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7b2d4d6cc1673b917169012b2985f6d2d8330dc8))
- **react:** add search to list of allowed TextField types ([3bb86c7](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/3bb86c74ab0fdf4452d50566b1875f941854074d))
- **react:** add useSelect hook to help with multiselect ([401f767](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/401f7679b06f1186a9aa2d44564bd7fb844c3670))
- **react:** add useValidation for easier controlled validation ([69a56b9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/69a56b9815ae2e4a8f5e1f95e3b90613d753ebb8))
- **react:** add validation for badInput ([373929c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/373929c0d56710fe58af2ffb293b34349608fdc7))
- **react:** allow components to control the tooltip hiding delay ([cdb02f4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cdb02f4369f27348d5f58a963495ef86238a156a))
- **react:** allow custom icons to have a label ([f47f345](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f47f3454c81a3f84dbd726b7f35d4b295f05f70a))
- **react:** close the dropdown when it's disabled ([1ef0146](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/1ef014608d5e9c34e8eb63f6d340c466273c601c))
- **react:** ensure that screen reader users are notified of button changes ([c989fb5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c989fb59896695898ab45583686e10de844e43b9))
- **react:** expose all utilities as part of the public api ([2508d4a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2508d4a77d0b5f5bd9b08c2ecb054a21bff1f434))
- **react:** initial FieldAddon ([76b39e8](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/76b39e84c9cacae94b9108eafd6f131c21dc077f))
- **react:** initial FieldFeedback component ([cbfe261](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cbfe2619394ad7ae70e9ab76050bdb07d4447de6))
- **react:** initial FieldInfo component ([34d7275](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/34d7275eb70e1ca8f36ec36da0a742be2efea854)), closes [#112](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/112)
- **react:** make all disclosure callbacks controllable ([c4818cc](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c4818ccbf0dab0d7e4a2f6619353146d6e38ad2b))
- **react:** make icons tooltipable ([bc7c6b6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/bc7c6b637853325c42f0002a64057c41d0fc5fe5))
- **react:** polyfill aria-modal on modal open ([852fa62](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/852fa626b9e8b199e34c20a545cea369b40f08dc))
- **react:** tooltip button when icon-only ([e665600](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e665600162295e47ee8e5a95afd7bc73921eadf4))
- **react:** use field info as a fieldset legend ([fce99d2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/fce99d2efb5f45d19a739d40e5a37bb7bff476aa))
- add props and prefixing helpers ([db92524](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/db92524517f7e9eca51b2dc4f23434850191ad4f))
- add usePopper hook ([3d05dc2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/3d05dc23032d3ec516992bba76136cdd08dfdd11))
- add useTooltip hook ([d1b5a8b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d1b5a8b1b0376cc3a15ed952641928fc4e41a30f))
- add useTriggers hook to handle open state ([ac55b8c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/ac55b8c812bc1aea0224e44772655524d9dbef54))

* refactor(react)!: overhaul MultipleChoice as ChoiceField ([604beda](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/604bedadad9b919ea779ea2eb978c5d5c651e8d0))
* refactor(react)!: completely rewrite TextField ([c159266](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c1592666c4abcf57f022a06fdddf8461bf950497))
* refactor(react)!: rewrite & simplify BaseInput ([2efe83e](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2efe83e289c1273e62a71d06041f55e3c66cddb1))
* refactor(react)!: simplify validation ([4bfe73b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/4bfe73b4127c811aeb2c4666bd1dec8fa17d7574))
* feat(react)!: complete rewrite of Dropdown ([cf072a2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cf072a2d165f40f054f74669da991944322251cf))

### BREAKING CHANGES

- The `label` prop has been removed from `TextField`, which now uses its children for its label.
- `MultipleChoice` has been removed in favor of the new `ChoiceField`, which will be rendered as a `<fieldset>` with either checkbox or radio choices, depending on whether the `multiple` prop is `true` or `false`.
- **react:** `Checkbox` now uses a `Field` class structure, similar to `TextField`.
- `Modal`: `addCloseButton` -> `hideCloseButton`, which is undefined by default.
- **react:** both of the `Modal`'s focus-related callbacks have been removed. To replicate `onInitialFocus`, check for the `document.activeElement` inside an `onOpen` callback. The `onRequestFocusWrap` has no replacement but did not have a good use case.
- **react:** `Modal` now uses the `focusOnOpen` prop to define what element should be focused on open, replacing the old `initialFocusRef`. This should be an actual HTMLElement, which the user can define with a ref.
- Text Field prop rename: `help` -> `description`
- Text Field prop rename: `helpClass` -> `descriptionClass`
- Text Field prop rename: `errorClass` -> `errorsClass`
- `TextField` labels cannot be React elements now--they must be strings.
- the `TextField` anatomy has been reworked to allow for more flexible styling. The overall structure uses the new `FieldInfo` component, a `.field__group` wrapper for the `<input>` and its optional addons, and the new `FieldFeedback` component.
- remove the `disableTooltip` prop entirely in the `BaseInput` stack. errors are now always reflected in the browser's constraint validation API.
- validation errors can only be strings and can no longer be JSX Elements.
- the `options` prop has been removed entirely in favor of using `children` to compose options. Children should now be `<Dropdown.Option value={value}>{ contents }</Dropdown.Option>` or an array of values.
- `onRequestSelect` is now `onChange` to better match other form control callbacks.
- sizing for the button and listbox can now be controlled independently via the `matchWidth` prop. To replicate the previous behavior of resizing the button to match the listbox, set `matchWidth="listbox"`.

## [0.9.4](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.3...v0.9.4) (2020-06-22)

### Bug Fixes

- **react:** only return focus when actually closing ([a332ce6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/a332ce6874b97ef4082e342466e6cb02c25416c3))

## [0.9.3](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.2...v0.9.3) (2020-06-22)

### Bug Fixes

- **react:** ensure that internal BaseButtons do not submit on click ([b69a97f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/b69a97f112d016b8ab95fbe841ea4de95efd2dc7))

## [0.9.2](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.1...v0.9.2) (2020-06-08)

**Note:** Version bump only for package @wwnds/react

## [0.9.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.9.0...v0.9.1) (2020-06-03)

### Bug Fixes

- **react:** use relative paths ([2b97289](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2b97289989edecd2ba2eb58926eeebdff3d00cd5))

# [0.9.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.8.1...v0.9.0) (2020-05-31)

### Features

- **react:** add icon variants ([222e7b2](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/222e7b20411e09edf10dd3dc909b7b5bb56e1cb0))

## [0.8.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.8.0...v0.8.1) (2020-05-08)

**Note:** Version bump only for package @wwnds/react

# [0.8.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.7.0...v0.8.0) (2020-05-02)

### Bug Fixes

- **react:** export Modal as a top-level component ([ad4ac4a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/ad4ac4a0de25ea5eeed135929a3ec65d8e0e5ff1))
- **react:** only apply modifier if name is specified on Icon ([f1efc32](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f1efc327acdb9bc88f266aabfa747d5dfbdc8b99))
- **react:** use a real HTML comment in SVG source ([1adff2a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/1adff2aee412b6126b31e7ceebd1920b135cece8))

### Features

- **react:** initial BaseListbox and BaseListOption ([495dc72](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/495dc7211a6b3ea2615d1881f1d5d3db356e290e))
- **react:** initial BasePopper and Tooltip ([75815a5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/75815a5f23980bf71f853e64bbaeee7135923a78))
- **react:** initial Dropdown ([8eac9d7](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/8eac9d7326387aa609d0f73ce2f228f7aad4114d))

# [0.7.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.6.1...v0.7.0) (2020-04-01)

### Bug Fixes

- **react:** move react & react-dom to dev/peerDeps ([2268999](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2268999ba7fcbd25614a784b12cb8e49e6b29b96))
- **switch:** use props to update state ([60757eb](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/60757ebdfe5720a5765dea7cff65fd7953b24be6)), closes [#100](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/100)

### Features

- **modal:** add onRequestFocusWrap prop ([f2b44ba](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f2b44ba223582703df86276c14b02735585c2213))
- **react:** add BaseDialog ([6920ed9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/6920ed98e2c92f2380abac1c765770c2fa49d591))
- **react:** add createValidator factory function ([9b2537a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/9b2537a8decc1b09e8b1b02ab8cb36dd082dcd7a))
- **react:** add focusable utilities ([9c44922](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/9c4492252332bf2ad3fdbcd4261ecedbea3a45ab))
- **react:** add hook to merge forwarded refs ([152fccd](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/152fccdd13998ac0649d23236cb287ef02ee9f78))
- **react:** add prop to disable browser tooltips on inputs ([bcae744](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/bcae744714645a0b59f38823016fc519386e11af))
- **react:** initial Modal dialog ([585024b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/585024ba32b59de55d2ff7169dce2f45dd0bf141))
- **switch:** flip state display prop ([c68dadf](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/c68dadf857f4a08aaf7f66fe1cf75236b28b4e70))
- **TextField:** allow users to customize feedback ([133aa1a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/133aa1ab69b16b2088a4b865a60efc55302dbf43))

## [0.6.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.6.0...v0.6.1) (2020-03-03)

**Note:** Version bump only for package @wwnds/react

# [0.6.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.5.1...v0.6.0) (2020-02-28)

### Bug Fixes

- **a11y:** explicitly set label when multiple exist ([e8fc401](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e8fc401dd3a37c28e9a165b75a26e29e463fcdc7))
- **react:** ensure that ids can be passed as props ([f68d480](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f68d4804a4cf7cf1ad15862f23e51f0c0e10ddf6)), closes [#82](https://github.com/wwnorton/design-system/tree/main/packages/react/issues/82)
- remove unnecessary import ([cdfbce5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/cdfbce5716b26deb920b55381a6045aac94b5700))
- **react:** ensure that onClick is triggered on switch ([0e2b2e3](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0e2b2e35a18730b54f37c72a0b7877ba66c36786))
- **storybook:** upgrade storybook ([03705f9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/03705f9ec1163f430d0595ae7f8b948159b60e4e))

### Features

- **react:** add support for custom switch states ([4e79518](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/4e79518fea328de8670802ad598e2526f444234f))
- initial MultipleChoice and Choice components ([67df099](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/67df0995b0299137ca718e251180e648a4b070db))
- **react:** add icon utility ([7a060e6](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/7a060e6f2c90b04bd304b82b12d17f12a3c78cc8))
- **react:** add IconButton component ([96df9a9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/96df9a9796748b9f8c9d8537386a76806561e469))
- **react:** add support for icons in buttons ([736e8dd](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/736e8dd4fb10b74686a3731e405302d9cb900e33))
- **react:** allow custom icons and CSS height ([f43bd30](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f43bd30eb4d27fea482b0409b4417474618e603d))
- add material minus icon ([5fcb75b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/5fcb75be7abf8bf4305d064360c5d5b99c4cd731))
- add react radio implementation ([3b7f57b](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/3b7f57b28e188efb41e474eb0d837a0a742320f9))
- initial checkbox update commit ([d8243b1](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d8243b1ba728eedaa4a0c30ee46396a0cc4c13b3))
- **react:** initial BaseSVG ([2912aa5](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2912aa5b0125247c0c258f0e5a663d8f654327f8))
- **react:** initial icon ([0447df8](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0447df84ab638cec582a86fee87ef0d089e077da))

## [0.5.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.5.0...v0.5.1) (2020-02-04)

### Bug Fixes

- **react:** add missing components to main export ([5d8ccd4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/5d8ccd4d7373adcedd0768879a40f8352cbcf633))

# [0.5.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.4.0...v0.5.0) (2020-01-31)

### Bug Fixes

- **textfield:** apply class to the textfield, not input ([5567278](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/5567278d074017688ea0dc24735230bfe0510998))
- include props on forwardref generc ([99b2843](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/99b2843b4b54c66ff0be76a232f140c1778fbc18))
- **a11y:** actually disable the switch ([d8e340c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d8e340c8fa7be6654302a05c69dccc86ae4a11dc))
- **button:** deactivate on blur ([0b22096](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0b22096dc01b155b67a7a2bd396c80c0bf080458))

### Features

- **react:** update text field to use new validation api ([34de3ef](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/34de3efc61979646df307b0e4f56d838d5b0d7b5))
- utilities for form validation feedback ([948ea6a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/948ea6abdaf51600a9ff995307df2b1f28648b8b))
- **a11y:** improve aria markup of checkbox ([134f466](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/134f466737c2ada8d2ed874fe5c2b8d35934a2b5))
- add initial testing framework ([a80f1a9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/a80f1a99443aa7eb6bdaa87945cf055ab4231a81))
- add react checkbox implementation ([e51f78a](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/e51f78af45d785d8114bb11fc1188f751e3835ed))

# [0.4.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.3.0...v0.4.0) (2020-01-02)

### Bug Fixes

- update react version in eslintrc file ([f192fe4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f192fe46286ab14d46ab2703d3f9bcd222a470ed))
- use bem-style class names ([bd92dcd](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/bd92dcdb04958edafdc4537f964331fe3b20a14f))

### Features

- **core:** initial textfield implementation ([15a66c4](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/15a66c46758c659ab04c36966429a639c8310c93))
- **react:** add textualState prop to toggle ([b280067](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/b28006702859eab8eb5b5ee73ca1260ee36c24a6))
- **react:** initial disclosure implementation ([f1ca740](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/f1ca7401ce1bc04d29143811e4281691aab13783))
- **react:** initial text field ([d7ec06c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/d7ec06cf9fd4ebfc9a11ce4d7e619929453addd5))
- **react:** more consistent callbacks ([34bddfc](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/34bddfc38221f5170b60d5e6bc3ae5e71278ed7f))

# [0.3.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.2.1...v0.3.0) (2019-11-27)

**Note:** Version bump only for package @wwnds/react

## [0.2.1](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.2.0...v0.2.1) (2019-11-07)

### Bug Fixes

- **react:** output and use type declarations ([a1e1dc9](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/a1e1dc9601108e06361dceba9b0f82f93e8319db))

# [0.2.0](https://github.com/wwnorton/design-system/tree/main/packages/react/compare/v0.1.0...v0.2.0) (2019-10-31)

### Features

- **react:** add forwardrefs for root button ([60bd56f](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/60bd56fa30421d7319c819e1315a6ed9d00af4bd))
- **react:** add storybook and typescript ([0df3012](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/0df3012ce911817f738b01692e5f126a268697ae))
- **react:** apply all attributes to child button ([2eb758e](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/2eb758ec61fc22ea428cf7aeb0975591471135ad))
- **react:** initial button ([8615e91](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/8615e9180bd92b17ace233c1b8114a364eccbfc1))
- **react:** initial toggle button ([ffe107c](https://github.com/wwnorton/design-system/tree/main/packages/react/commit/ffe107ce6aaefcb5c4a0076575c42997c21e92e8))

# 0.1.0 (2019-09-27)

**Note:** Version bump only for package @wwnds/react
