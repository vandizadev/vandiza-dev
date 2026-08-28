export default function handler(req, res) {
  const { query } = req;
  const apiBase = 'https://github.com/login/oauth';
  const clientId = process.env.DECAP_CLIENT_ID;
  const redirectUri = `https://www.vandiza.com/api/auth`;

  // CORS untuk fetch dari browser
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Step 1: redirect user to GitHub OAuth consent
  if (!query.code) {
    const ghUrl = `${apiBase}/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;
    return res.writeHead(302, { Location: ghUrl }).end();
  }

  // Step 2: exchange code for token
  const tokenUrl = `${apiBase}/access_token`;
  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: process.env.DECAP_CLIENT_SECRET,
      code: query.code,
      redirect_uri: redirectUri,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      const token = data.access_token;
      return res
        .writeHead(302, { Location: `/admin/#access_token=${token}` })
        .end();
    })
    .catch((e) => res.status(500).json({ error: e.message }));
}
