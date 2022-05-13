import type { ColumnsType } from 'antd/lib/table/interface'
import * as ExcelJs from 'exceljs'
import { generateHeaders, saveWorkbook } from './utils'
function useExcel() {
  function antdTable2xlsx(columns: ColumnsType, data: object[], fileName: string) {
    try {
      // 创建工作簿
      const workbook = new ExcelJs.Workbook()
      // 添加sheet
      const worksheet = workbook.addWorksheet('sheet')
      // 设置 sheet 的默认行高
      worksheet.properties.defaultRowHeight = 20
      // 设置列
      worksheet.columns = generateHeaders(columns)
      // 添加行
      worksheet.addRows(data)
      // 导出excel
      saveWorkbook(workbook, `${fileName}.xlsx`)
    }
    catch (err) {
      console.warn(err)
    }
  }
  return {
    antdTable2xlsx,
  }
}

export { useExcel }
