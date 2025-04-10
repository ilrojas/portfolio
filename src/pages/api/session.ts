import {getSession } from "auth-astro/server";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async (context) => {
  if (!context.request) {
    return new Response(
      JSON.stringify({ error: "Request object is not available in prerendered pages" }),
      {
        status: 400,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
  }

  const session = await getSession(context.request);
  return new Response(
    JSON.stringify(session ?? null),
    {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Permite solicitudes desde cualquier origen
    }
    }
  );
};
