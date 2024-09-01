const Table = ({
    columns, renderRow, data
    }: {
        columns: {header: string, accessor: string, className?: string}[];
        renderRow: (item: any) => React.ReactNode;
        data: any[];
    }) => {
  return (
    <table className="w-full mt-4">
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={column.className}>{column.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>{data.map((item, index) => renderRow(item))}</tbody>
    </table>
  )
}

export default Table