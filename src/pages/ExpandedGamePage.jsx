import { Link } from "react-router-dom";
import { ExpandedGrid } from "../components/ExpandedGrid/ExpandedGrid";
import { Button } from "../components/UI/Button/Button";
import { AnimateComponent } from "../components/UI/AnimateComponent";
export const ExpandedGamePage = () => {
	return (
		<>
		<AnimateComponent>
			<Link to="/" tabIndex={-1}>
        <Button btnType="btn-back">Back to menu</Button>
      </Link>
      <ExpandedGrid />
		</AnimateComponent>
		</>
	);
}
