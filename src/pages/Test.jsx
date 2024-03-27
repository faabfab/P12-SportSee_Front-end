import * as React from 'react'
import ApiCall from '../components/TestApi'

export default function App() {
  return <ApiCall apiUrl="http://localhost:3000/user/18/" />
}
