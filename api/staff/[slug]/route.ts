import { NextResponse } from "next/server";
import staff from "@/data/staff.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const staffMember = staff.find((s) => s.slug === slug);

  if (!staffMember) {
    return NextResponse.json({ error: "Staff not found" }, { status: 404 });
  }

  return NextResponse.json(staffMember);
}
