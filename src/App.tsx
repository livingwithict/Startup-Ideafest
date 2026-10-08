import { useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import { usePath } from "./router"
import Home from "./pages/Home"
import About from "./pages/About"
import Exhibitors from "./pages/Exhibitors"
import PastEvents from "./pages/PastEvents"
import News from "./pages/News"
import Contact from "./pages/Contact"
import Register from "./pages/Register"

const routes: Record<string, { title: string; Page: () => React.JSX.Element }> = {
  "/": { title: "Startup & Idea Fest 2026", Page: Home },
  "/about": { title: "About", Page: About },
  "/exhibitors": { title: "Exhibitors", Page: Exhibitors },
  "/past-events": { title: "Past Events", Page: PastEvents },
  "/news": { title: "News & Media", Page: News },
  "/contact": { title: "Contact", Page: Contact },
  "/register": { title: "Register", Page: Register },
}

export default function App() {
  const path = usePath()
  const { title, Page } = routes[path] ?? routes["/"]
  useEffect(() => {
    document.title = path === "/" ? title : `${title} · Startup & Idea Fest 2026`
  }, [path, title])

  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Page />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
