import SideBar from "@/components/side-bar/SideBar"
import SideChat from "@/components/messages/SideChat";
import Header from "@/components/header/header";

function PageLayout({ title, children }) {
  return (
    <>
      <div className="grid grid-cols-[.7fr,3fr] h-screen">

        <SideBar />

        <div className="grid grid-rows-[1.2fr,8fr]">
          <Header title={title} />

          <div className="h-full grid grid-cols-[3fr,1fr]">

              {children}

            <SideChat />

          </div>

        </div>

      </div>
    </>
  )
}

export default PageLayout