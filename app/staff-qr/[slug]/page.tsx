import Image from "next/image";
import Link from "next/link";

import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function StaffQRPage() {
  // For now, use dummy data
  const staff = {
    name: "Mayowa Bernard",
    position: "Lead Software Engineer",
    id: "EMP-2025-042",
    gender: "Male",
    joinDate: "Feb 22, 2025",
    department: "Engineering",
    location: "The Knowledge Hub, Oke Ado",
    email: "mayowa@besttechnologiesltd.com",
    phone: "+234 (555) 987-6543",
    photo: "/staff/michael.jpg",
  };

  return (
    <main className="lg:min-h-screen bg-gray-200 text-[#0f172a] flex flex-col">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center w-full lg:w-5xl max-w-5xl mx-auto md:mt-20 mt-10 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo-main.png"
            width={200}
            height={200}
            alt="Best Technologies logo"
          />
        </Link>
        <h1 className="text-lg font-semibold mt-5 md:mt-0">
          Staff Verification Portal
        </h1>
      </header>

      {/* Staff Card */}
      <section className="p-6 mt-10 md:mt-0 mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center md:flex-row md:gap-x-6 bg-[url('/blobs/green-gradient.jpg')] bg-cover bg-no-repeat bg-center shadow-lg py-8 ps-6 rounded-t-lg">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white -mt-16 md:mt-0">
            <Image
              src={staff.photo}
              alt={staff.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Staff Info */}
          <div className="mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row justify-start items-center gap-x-5">
              <h2 className="text-2xl text-white font-bold mt-1">
                {staff.name}
              </h2>
              <div className="hidden md:flex items-center gap-2">
                <FaCheckCircle className="text-white" />
                <span className="text-white font-medium">Verified</span>
              </div>
            </div>
            <p className="text-white">{staff.position}</p>
            <div className="flex items-center gap-2 mt-2 md:hidden">
              <FaCheckCircle className="text-white" />
              <span className="text-white font-medium">Verified</span>
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Personal Info */}
          <div className="bg-[#dcecb5] p-4 rounded-md">
            <h3 className="font-semibold text-sm mb-2">PERSONAL INFO</h3>
            <p className="flex items-center gap-2">
              <FaUser className="text-[#2bcd15]" /> Employee ID:{" "}
              <strong>{staff.id}</strong>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaUser className="text-[#2bcd15]" /> Gender:{" "}
              <strong>{staff.gender}</strong>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaCalendarAlt className="text-[#2bcd15]" /> Join Date:{" "}
              <strong>{staff.joinDate}</strong>
            </p>
          </div>

          {/* Work Info */}
          <div className="bg-[#dcecb5]  p-4 rounded-md">
            <h3 className="font-semibold text-sm mb-2">WORK INFO</h3>
            <p className="flex items-center gap-2">
              <FaBuilding className="text-[#2bcd15]" /> Department:{" "}
              <strong>{staff.department}</strong>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt className="text-[#2bcd15]" /> Location:{" "}
              <strong>{staff.location}</strong>
            </p>
          </div>
        </div>
        {/* Contact Info */}
        <div className="bg-[#dcecb5]  p-4 rounded-md mt-4">
          <h3 className="font-semibold text-sm mb-2">CONTACT</h3>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#2bcd15]" /> Email:{" "}
            <strong className="break-all">{staff.email}</strong>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone className="text-[#2bcd15]" /> Phone:{" "}
            <strong>{staff.phone}</strong>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 my-10">
        © 2025{" "}
        <Link href="/" className="text-[#2bcd15] hover:text-[#a4cd39]">
          Best Technologies Ltd.
        </Link>{" "}
        All rights reserved.
      </footer>
    </main>
  );
}
