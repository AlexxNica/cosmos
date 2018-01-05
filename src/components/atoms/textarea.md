```meta
  category: Forms
```

`import TextArea from 'cosmos/textarea'`

```js props
<TextArea {props} placeholder="Placeholder text" />
```

#### Length of the TextArea

You can make the `TextArea` longer by using the `length` prop. By default, it's 5 rows long.

```js multiple
render(
  <div>
    <TextArea length={1} placeholder="Small TextArea" />
    <br/><br/>
    <TextArea length={7} placeholder="Really long TextArea" />
  </div>
)
```

#### Resizing

`TextArea` is resizable by the user. If you want to disable that behaviour, set `resizable` to `false` as a boolean value.

```js multiple
render(
  <div>
    <TextArea placeholder="Resizable by default" />
    <br/><br/>
    <TextArea resizable={false} placeholder="Can't resize this" />
  </div>
)
```

#### TextArea states

The `readOnly` prop can be used for disabling input that do not satisfy constraints.

To show validation errors, use the `error` prop which takes the error message as a string.

```js multiple
render(
  <div>
    <TextArea readOnly placeholder="Field is disabled" />
    <br/><br/>
    <TextArea defaultValue="siddharth@auth..com" error="email id not valid" />
  </div>
)
```

#### Function

The `onChange` prop is transparently passed to the underlying textarea

```js multiple
const method = event => alert(event.target.value)

render(<TextArea onChange={method} placeholder="change my text" />)
```