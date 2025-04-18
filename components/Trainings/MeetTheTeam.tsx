"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    role: "Software Engineer / Team Lead",
    image: "/staff/mayowa.png",
    message:
      "At Best Technologies Ltd., we don't just teach code — we build problem solvers. It's my joy to guide learners through the journey of becoming confident, capable engineers.",
  },
  {
    role: "Marketing Lead / Assistant Team Lead",
    image: "/staff/steve.png",
    message:
      "We’re passionate about helping people discover life-changing tech opportunities. I help shape how the world sees our vision — and I’m excited to welcome you to it!",
  },
  {
    role: "Creative Admin / Customer Support",
    image: "/staff/esther.png",
    message:
      "From guiding inquiries to making your learning experience smooth and friendly, I’m here to support you. We're more than a tech company — we’re a community.",
  },
  {
    role: "Social Media Manager",
    image: "/staff/vanilla.png",
    message:
      "I tell the story of your journey before you even start — through content that inspires and educates. Join us and become part of a growing movement in tech.",
  },
  {
    role: "Web Developer / Designer",
    image: "/staff/juwon.png",
    message:
      "I get to build and design the very platforms you’ll be learning on. If it looks smooth and works seamlessly — that's my touch. Let’s create something beautiful together!",
  },
  {
    role: "Principal Consultant",
    image: "/staff/consultant.jpg",
    message:
      "Every learner’s path is unique. With years of industry insight, I help align your goals with real-world impact. You're not just learning — you’re preparing to lead.",
  },
  {
    role: "Managing Director",
    image: "/staff/director.jpg",
    message:
      "At Best Technologies Ltd., our heartbeat is transformation. From passion to profession, we equip our students to thrive in tech and in life. Welcome aboard.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-brand-primary font-bold uppercase font-cursive">
          Meet Some of the Team Members
        </h2>
        <div className="flex justify-between items-end mb-8">
          <div className="flex gap-2">
            <div className="swiper-button-prev cursor-pointer">
              <ChevronLeft className="w-8 h-8 text-brand-primary" />
            </div>
            <div className="swiper-button-next cursor-pointer">
              <ChevronRight className="w-8 h-8 text-brand-primary" />
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="meet-the-team-swiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-xl shadow p-6 mb-5 h-full flex flex-col items-center text-center">
                <Image
                  src={member.image}
                  alt={member.role}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mb-4"
                />
                <p className="text-sm italic text-gray-700 mb-4">
                  {member.message}
                </p>
                <h4 className="text-sm font-semibold text-brand-primary mt-auto">
                  {member.role}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
