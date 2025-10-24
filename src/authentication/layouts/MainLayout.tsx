import {Navbar} from "../../ui/components/Navbar"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MainLayout = ({Children}: any) => {
  return (
    <>
    <Navbar/>    
    {Children}
    </>

  )
}
