"""Petit serveur pour héberger index.html sur Render (Web Service Python).

Aucune dépendance. Render fournit le port dans la variable PORT.
Inutile si le site est déployé en « Static Site ».
"""
import os
import re
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Ne sert que la page et le contenu des parcours, jamais les fichiers Python.
        path = self.path.split("?")[0]
        if path in ("/", "/index.html"):
            self.path = "/index.html"
            return super().do_GET()
        if re.fullmatch(r"/parcours/[a-z]+\.js", path):
            return super().do_GET()
        if self.path == "/healthz":
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"ok")
            return
        self.send_error(404)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "10000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), partial(Handler, directory=ROOT))
    print(f"English for Life in Dubai : http://0.0.0.0:{port}")
    server.serve_forever()
