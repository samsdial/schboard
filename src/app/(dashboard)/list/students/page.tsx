import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, studentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Student = {
  id: number,
  studentId: string,
  name: string,
  email?: string,
  photo: string,
  phone?: string,
  grade: number,
  class: string[],
  address: string,
}

const columns = [
  { header: "Info", accessor: "info" },
  { header: "StudentId", accessor: "studentId", className: "hidden md:table-cell" }, 
  { header: "Grade", accessor: "grade", className: "hidden md:table-cell" }, 
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" }, 
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" }, 
  { header: "Actions", accessor: "actions" },  
]

const StudentList = () => {

  const renderRow = (item: Student) => (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">
          <Image src={item.photo} width={40} height={40} alt="avatar" className="md:hidden xl:block w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.class}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/view.png" width={14} height={14} alt="view" />
              </button>
            </Link>
            {role === "admin" &&(
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" width={14} height={14} alt="delete" />
              </button>
            )}
          </div>
        </td>
      </tr>
  )

  return (
    <div className="flex-1 bg-white rounded-md p-4 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold ">All Students</h1>
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
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/plus.png" width={14} height={14} alt="plus" />
              </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
        <Pagination />
    </div>
  )
}

export default StudentList