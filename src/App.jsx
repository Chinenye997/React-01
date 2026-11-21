import SayHello from "./components/SayHello";
import MyFirstReactCode from "./components/MyFirstReactCode";
import ProductCard from "./components/ProductCard";
import Welcome from "./components/Welcome";
import WelcomeBanner from "./components/WelcomeBanner";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Intro from "./components/intro";
import AddTwo from "./components/AddTwo";
import TaskList from "./components/TaskList";

import ProductList from "./components/ProductList";
import StudentList from "./components/StudentList";
import PasswordInput from "./components/PasswordInput";
import LightSwitch from "./components/LightSwitch";
import Menu from "./components/Menu";
import Header from "./components/Header";
import CourseList from "./components/CourseList";

// import ItemCard from "./components/ItemCard"
// import Welcomemessage from "./components/WelcomeMessage"
function App() {
  return (
    <>
      <Menu />
      <Header />
      <SayHello />
      <MyFirstReactCode />
      <ProductCard />
      <PasswordInput />
      <LightSwitch />
      <Welcome />
      <WelcomeBanner />
      <Card />
      <Banner />
      <Intro />
      <AddTwo />
      <div className="flex flex-col items-center w-full border">
        <h2 className="font-bold text-5xl">Our Products</h2>
        <ProductList />
      </div>
      <CourseList />

      <div className="flex flex-col items-center w-full border">
        <h2 className="font-bold text-5xl gap-4">Student Card</h2>
        <StudentList />
      </div>
      <TaskList />
      {/* <ItemCard />
        <Welcomemessage /> */}
    </>
  );
}

export default App;
