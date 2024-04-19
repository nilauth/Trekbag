import { Grid } from "@radix-ui/themes";
import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainItemList from "./components/MainItemList";

const App = () => {
  return (
    <div className='bg-blue-50 h-screen flex items-center justify-center flex-col'>
      <div className='h-full w-[60%]'>
        <BackgroundHeader />
        <main className='h-[70%] w-full bg-white rounded-md shadow-lg relative'>
          <Grid columns='3' rows='12' width='auto' minHeight='100%'>
            <Header />
            {/* <Box className='border-r' gridColumn='1 / 3' gridRow='2 / 13'></Box> */}
            <MainItemList />
            {/* <Box className='' gridColumn='3 / 4' gridRow='2 / 13'></Box> */}
            <SideBar />
          </Grid>
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default App;

// vid 70 6. project 19 apr 01:20 AM

// TODO: implement scroll in ItemList, check link in comment Scroll-area shadcn
