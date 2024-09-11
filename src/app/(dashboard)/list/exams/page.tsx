import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { examsData, role } from "@/lib/data"
import Image from "next/image"

type Exam = {
  id: number,
  subject: string,
  class: string,
  teacher: string,
  date: string,
}

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Class", accessor: "class", }, 
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" }, 
  { header: "Date", accessor: "date", className: "hidden md:table-cell" }, 
  { header: "Actions", accessor: "actions" },  
]

const ExamList = () => {

  const renderRow = (item: Exam) => (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">
          {item.subject}
        </td>
        <td>{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td> 
        <td className="hidden md:table-cell">{item.date}</td> 
        <td>
          <div className="flex items-center gap-2">
            {/* <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/edit.png" width={14} height={14} alt="edit" />
              </button>
            </Link>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" width={14} height={14} alt="delete" />
              </button> */}
            {role === "admin" &&(
              <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
            )}
          </div>
        </td>
      </tr>
  )

  return (
    <div className="flex-1 bg-white rounded-md p-4 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold ">All Exams</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" width={14} height={14} alt="filter" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" width={14} height={14} alt="sort" />
            </button>
            {role === "admin" &&(
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" width={14} height={14} alt="plus" />
              // </button>
              <FormModal table="exam" type="create" />
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={examsData} />
        <Pagination />
    </div>
  )
}

export default ExamList