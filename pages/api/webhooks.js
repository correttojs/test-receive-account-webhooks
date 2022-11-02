// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const crypto = require("crypto");

function verifySignature(req, payload) {
  const signature = crypto
    .createHmac("sha1", "ybzbArMmNYquPvN6Q05EOGqJ")
    .update(payload)
    .digest("hex");
  return signature === req.headers["x-vercel-signature"];
}

export default function handler(req, res) {
  const payload = JSON.stringify(req.body);
  // if (!verifySignature(req, payload)) {
  //   return res.status(403).json({
  //     code: `invalid_signature`,
  //     error: `signature didn't match`,
  //   });
  // }
  console.log(req.body);
  res.status(500).json(req.body);
}
