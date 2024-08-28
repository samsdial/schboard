
import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalender"

const TeacherPage = () => {
  return (
    <div className="flex flex-1 flex-col xl:flex-row gap-4 p-4">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  )
}

export default TeacherPage