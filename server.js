import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist');
const GROWTH_FRAMES_DIR = path.join(__dirname, 'public', 'growth-frames');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  let targetPath;

  if (pathname.startsWith('/growth-frames/')) {
    const filename = pathname.replace('/growth-frames/', '');
    targetPath = path.normalize(path.join(GROWTH_FRAMES_DIR, filename));
  } else {
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }
    targetPath = path.normalize(path.join(DIST_DIR, pathname));
  }

  fs.stat(targetPath, (err, stats) => {
    if (err || !stats.isFile()) {
      const indexPath = path.join(DIST_DIR, 'index.html');
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (indexErr || !indexStats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': indexStats.size,
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        fs.createReadStream(indexPath).pipe(res);
      });
      return;
    }

    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    };

    res.writeHead(200, headers);
    fs.createReadStream(targetPath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
