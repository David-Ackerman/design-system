# Snapshot report for `packages/react/src/components/button/button.test.tsx`

The actual snapshot is saved in `button.test.tsx.snap`.

Generated by [AVA](https://ava.li).

## BaseButton: a custom `activeClass` is set on keydown.space

> Snapshot 1

    <button
      className="custom-active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

## BaseButton: blur removes the `active` class

> keydown.space

    <button
      className="active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

> blur

    <button
      className=""
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

## BaseButton: event callbacks are triggered in addition to internal activation behavior

> initial render

    <button
      className=""
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

> first keydown.space

    <button
      className="active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    >
      keydown
    </button>

> keyup.space

    <button
      className=""
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    >
      keyup
    </button>

> second keydown.space

    <button
      className="active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    >
      keydown
    </button>

> blur

    <button
      className=""
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    >
      blur
    </button>

## BaseButton: initially `active` is reflected in the className

> Snapshot 1

    <button
      className="active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

## BaseButton: non-space keydown does not add the `active` class

> keydown.enter

    <button
      className=""
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

## BaseButton: non-space keyup does not remove the `active` class

> keydown.space

    <button
      className="active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

> keyup.enter

    <button
      className="active"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

## BaseButton: renders its defaults

> Snapshot 1

    <button
      className=""
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
    />

## Button: `variant` is converted into a BEM modifier class

> Snapshot 1

    <button
      className="button button--outline"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
      type="button"
    />

## Button: a custom `baseName` is rendered as a className

> Snapshot 1

    <button
      className="btn"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
      type="button"
    />

## Button: renders its defaults

> Snapshot 1

    <button
      className="button"
      onBlur={Function handleBlur {}}
      onKeyDown={Function handleKeydown {}}
      onKeyUp={Function handleKeyup {}}
      type="button"
    />