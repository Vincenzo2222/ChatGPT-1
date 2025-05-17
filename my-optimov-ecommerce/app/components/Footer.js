export default function Footer() {
  return (
    <footer className="bg-white mt-8 py-4 px-2 md:px-16 text-sm text-center text-gray-600">
      <div className="mb-2">
        <span className="font-semibold">OPTIMOV</span> \u2013 Moving the Future
      </div>
      <div className="text-xs">
        \u00A9 {new Date().getFullYear()} OPTIMOV. All rights reserved.
      </div>
    </footer>
  )
}
