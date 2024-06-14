import { Home } from "../components/Home/Home";
import { AnimateComponent } from "../components/UI/AnimateComponent";
export const HomePage = () => {
  return (
    <div className="home">
      <AnimateComponent>
        <Home />
      </AnimateComponent>
    </div>
  );
};
