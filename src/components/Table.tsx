const Table = ({columns}: {columns: {header: string, accessor: string, className?: string}[]}) => {
  return (
    <table className="w-full mt-4">
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={column.className}>{column.header}</th>
                ))}
            </tr>
        </thead>
    </table>
  )
}

export default Table