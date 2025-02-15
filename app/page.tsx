import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 animate-pulse">ABOUT US</h1>

        <div className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-gradient">
          IETE NOTESBANK
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-center mb-8">
            Simplify your BTech journey with NotesBank! Get access to well-organized notes, previous year questions
            (PYQs), and reference materials for all eight semesters. Explore resources across multiple branches and ace
            your exams with ease. 📚
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "📚",
              title: "Our Vision",
              description:
                "To become go-to platform for each and every student, offering well-organized notes, previous year papers, and resources to help them excel in their academic journey.",
            },
            {
              icon: "🚀",
              title: "Our Mission",
              description:
                "To provide high-quality, accessible, and comprehensive study materials for students pursuing engineering and technology courses under their desired curriculum. ",
            },
            {
              icon: "🎓",
              title: " Our Team",
              description:
                "A dedicated team of educators, developers, and designers working tirelessely to ensure that every student has access to the best resources.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-800 bg-opacity-30 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-800 bg-opacity-30 p-8 rounded-lg shadow-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-cyan-300">Join Our Community</h2>
          <p className="mb-6 text-gray-300">
            Explore technology, enhance your skills, and be part of a dynamic technical community.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 animate-pulse"
          >
            Join Our Community
          </Link>
        </div>
      </div>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image
              src=""
              alt="IETE Logo"
              width={150}
              height={150}
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="w-full md:w-2/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Contact Us</h2>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center">
                <MapPin className="mr-2 text-cyan-400" />
                <span>Maharaja Agrasen Institute of Technology</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-cyan-400" />
                <a href="mailto:iete@gmail.com" className="hover:text-cyan-400">
                  iete@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-cyan-400" />
                <span>+91 1234567890</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-right">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white hover:text-cyan-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-cyan-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2025 IETE - MAIT. All rights reserved.</p>
          <p className="mt-2">Made with ❤ by Technical Team, IETE MAIT</p>
        </div>
      </footer>
    </div>
  )
}
