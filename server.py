import http.server
import socketserver

PORT = 8000
HOST = "0.0.0.0"  # This allows access from other devices

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((HOST, PORT), handler) as httpd:
    print(f"Serving at http://{HOST}:{PORT}")
    httpd.serve_forever()
