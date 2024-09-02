import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex flex-1 flex-col xl:flex-row p-4 gap-4">
        <div className="single-left w-full xl:w-2/3">
            <div className="top flex flex-col lg:flex-row gap-4">
                <div className="user-info flex flex-1 rounded-md bg-lamaSky py-6 px-4 gap-4">
                    <div className="avatar w-1/3">
                        <Image src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Avatar" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                    </div>
                    <div className="info w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-semibold">Violeta Martinez</h1>
                        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full flex md:w-1/3 lg:w-full 2xl:w-w-1/3 items-center gap-2">
                                <Image src="/blood.png" alt="Blood" width={14} height={14} />
                                <span>A+</span>
                            </div>
                            <div className="w-full flex md:w-1/3 lg:w-full 2xl:w-w-1/3 items-center gap-2">
                                <Image src="/date.png" alt="date" width={14} height={14} />
                                <span>September 2025</span>
                            </div>
                            <div className="w-full flex md:w-1/3 lg:w-full 2xl:w-w-1/3 items-center gap-2">
                                <Image src="/mail.png" alt="mail" width={14} height={14} />
                                <span>user@example.com</span>
                            </div>
                            <div className="w-full flex md:w-1/3 lg:w-full 2xl:w-w-1/3 items-center gap-2">
                                <Image src="/phone.png" alt="phone" width={14} height={14} />
                                <span>+1 234 567 890</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-cards flex-1">
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleAttendance.png" alt="Single Attendance" width={24} height={24} className="w-6 h-6"/>
                            <div>
                                <h1 className="text-sm font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleBranch.png" alt="Single Branch" width={24} height={24} className="w-6 h-6"/>
                            <div>
                                <h1 className="text-sm font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleLesson.png" alt="Single Lesson" width={24} height={24} className="w-6 h-6"/>
                            <div>
                                <h1 className="text-sm font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lesson</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleClass.png" alt="Single Class" width={24} height={24} className="w-6 h-6"/>
                            <div>
                                <h1 className="text-sm font-semibold">6A</h1>
                                <span className="text-sm text-gray-400">Class</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1 className="s">Student's Schedule</h1>
                <BigCalendar />
            </div>
        </div>
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex flex-wrap text-xs text-gray-500 gap-4">
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Student's Lessons</Link>
                    <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">Student's Teachers</Link>
                    <Link className="p-3 rounded-md bg-pink-50" href="/">Student's Exams</Link>
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Student's Assignments</Link>
                    <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">Student's Results</Link>
                </div>
            </div>
            <Performance />
            <Announcements />
        </div>
    </div>
  );
};

export default SingleStudentPage;