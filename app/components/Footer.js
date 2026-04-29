export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <p className="text-gray-300 mb-2">
              <a
                href="mailto:marc.schuettforth@outlook.com"
                className="hover:text-white transition"
              >
                marc.schuettforth@outlook.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/marc-sch%C3%BCttforth-677260407/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Forthy25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Download CV */}
          <div>
            <h3 className="font-bold mb-4">Download</h3>
            <a
              href="/Lebenslauf.pdf"
              download="Marc_Schuettforth_Lebenslauf.pdf"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              CV herunterladen
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Marc. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
