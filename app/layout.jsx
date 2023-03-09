import './globals.css'
import Navigation from './components/navegation'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
