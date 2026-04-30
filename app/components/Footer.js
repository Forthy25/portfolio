"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Kontakt</h3>
            <p className="text-gray-300 text-sm">
              <a
                href="mailto:marc.schuettforth@outlook.com"
                className="hover:text-white transition duration-200"
              >
                marc.schuettforth@outlook.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/marc-sch%C3%BCttforth-677260407/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-200 text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Forthy25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-200 text-sm"
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
          <p>&copy; Forthy25. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
