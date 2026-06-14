export async function GET() {
  return new Response(JSON.stringify({
    "is_pro": true,
    "tier": "pro",
    "membership_type": "pro",
    "pro_until": "2099-01-01T00:00:00.000Z",
    "max_premium_requests": 9999,
    "premium_requests_used": 0,
    "max_requests": 9999,
    "requests_used": 0
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
