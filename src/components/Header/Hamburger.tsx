import React from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { ToogleSideBar } from "../../redux-store/actions/Toogle";
import NavItem from "./NavItem";

interface RootState {
	Toogle?: boolean;
}

const Hamburger: React.FC<RootState> = () => {
	const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	const dispatch = useDispatch();
	const opened = useTypedSelector(state => state.Toogle);
	return (
		<>
			<div className="menu">
				<div
					className={opened ? "" : "close"}
					onClick={() => dispatch(ToogleSideBar())}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={opened ? "side-close" : "side-cover"}>
				<div className={opened ? "list" : "show"}>
					<div className="space">
						<NavItem link="www.test.com" text="How It Works" />
					</div>
					<div className="space">
						<NavItem link="www.test.com" text="Need A Doctor" />
					</div>
					<div className="space">
						<NavItem link="www.test.com" text="Contact Us" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hamburger;
