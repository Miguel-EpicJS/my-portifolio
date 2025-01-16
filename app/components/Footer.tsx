export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Miguel Martinez. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/miguel-jn-martinez/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://github.com/Miguel-EpicJS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="mailto:migueljunqueiranicaciomartinez@gmail.com" className="hover:text-blue-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

