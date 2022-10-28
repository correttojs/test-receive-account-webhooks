// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function verifySignature(req, payload) {
  const signature = crypto
    .createHmac("sha1", "qy5qTqecQtmQwuDLDKkNpSx1")
    .update(payload)
    .digest("hex");
  return signature === req.headers["x-vercel-signature"];
}

export default function handler(req, res) {
  if (!verifySignature(req, payload)) {
    return send(res, 403, {
      code: `invalid_signature`,
      error: `signature didn't match`,
    });
  }
  console.log(req.body);
  res.status(200).json(req.body);
}
