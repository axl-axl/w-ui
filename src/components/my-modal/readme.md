# my-modal



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                  | Default     |
| ------------- | -------------- | ----------- | --------------------- | ----------- |
| `close`       | `close`        |             | `boolean`             | `true`      |
| `footerclass` | `footerclass`  |             | `string`              | `undefined` |
| `headerTitle` | `header-title` |             | `string`              | `undefined` |
| `headerclass` | `headerclass`  |             | `string`              | `undefined` |
| `onCancel`    | --             |             | `Function`            | `undefined` |
| `onOk`        | --             |             | `(v: Object) => void` | `undefined` |
| `visible`     | `visible`      |             | `boolean`             | `false`     |


## Dependencies

### Depends on

- [my-icon](../my-icon)
- [my-button](../my-button)

### Graph
```mermaid
graph TD;
  my-modal --> my-icon
  my-modal --> my-button
  my-button --> my-icon
  style my-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
