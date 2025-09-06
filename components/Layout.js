export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-900 text-white p-4 flex justify-between">
        <img src="/images/logo.png" alt="SOSA Logo" className="h-10" />
        <nav>
          <a href="/" className="mr-4">Home</a>
          <a href="/about" className="mr-4">About</a>
          <a href="/services" className="mr-4">Services</a>
          <a href="/recruiters" className="mr-4">Recruiters</a>
          <a href="/contact" className="mr-4">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-blue-900 text-white p-4 text-center">
        <p>© 2025 SOSA Consulting. All rights reserved.</p>
        <nav>
          <a href="/faqs" className="mr-4">FAQs</a>
          <a href="/privacy" className="mr-4">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </nav>
      </footer>
    </div>
  )
}
