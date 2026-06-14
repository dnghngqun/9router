/**
 * Cursor MITM handler
 */
async function intercept(req, res, bodyBuffer, mappedModel, passthrough) {
  const url = req.url;

  // 1. Fake Auth / Pro endpoints
  if (url.includes("/user") || url.includes("/subscription") || url.includes("/check_pro")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      "is_pro": true,
      "tier": "pro",
      "membership_type": "pro",
      "pro_until": "2099-01-01T00:00:00.000Z",
      "max_premium_requests": 9999,
      "premium_requests_used": 0,
      "max_requests": 9999,
      "requests_used": 0
    }));
  }

  // 2. Chat / Completion endpoints (Forward to passthrough for now)
  // TODO: Implement actual model redirection here
  return passthrough(req, res, bodyBuffer);
}

module.exports = { intercept };
