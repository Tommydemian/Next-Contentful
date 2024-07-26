import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = (req: NextRequest) => {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");

  if (!secret) {
    return new Response("No", { status: 404, statusText: "Not Found" });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("No", {
      status: 401,
      statusText: "Not the right value",
    });
  }

  draftMode().enable();
  redirect("/");
};
