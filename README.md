# antd-table-2-xlsx

<p align="center">
<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h2a237kxogj20n00f6wey.jpg" height="200"/>

</p>

<h1 align="center">
antd-table-2-xlsx
</h1>
<p align="center">
A very simple way to transform antd table to xlsx .
<p>
<p align="center">
  <a href="https://www.npmjs.com/package/@sudongyuer/antd-table-2-xlsx"><img src="https://img.shields.io/npm/v/@sudongyuer/antd-table-2-xlsx?color=a1b858&label="></a>
  <a href="https://github.com/sudongyuer/antd-table-2-xlsx" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/sudongyuer/antd-table-2-xlsx?style=social"></a>
<p>
<h3 align="center">
<a ><i>Get Start!</i></a>
</h3>
<br>

# Install
```
pnpm add @sudongyuer/antd-table-2-xlsx
```

## Usage/Examples
`Client`
```typescript
  import { useExcel } from '@sudongyuer/antd-table-2-xlsx'
  const { antdTable2xlsx } = useExcel()
  //antd table columns and data fileName
   antdTable2xlsx(columns, data, 'xxxFilName')
```


## License

[MIT](./LICENSE) License © 2021-Present [YuDong Su](https://github.com/sudongyuer)

