export async function GET() {
  return new Response(JSON.stringify({
    "is_pro": true,
    "tier": "pro",
    "membership_type": "pro"
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
