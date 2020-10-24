import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='header logo'
				/>
			</Link>
			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon class='header__searchIcon' />
			</div>
			<div className='header__nav'>
				<div className='header__option'>
					<span class='header__optionLineOne'>Hello Guest</span>
					<span class='header__optionLineTwo'>Sign In</span>
				</div>

				<div className='header__option'>
					<span class='header__optionLineOne'>Returns</span>
					<span class='header__optionLineTwo'>& Orders</span>
				</div>

				<div className='header__option'>
					<span class='header__optionLineOne'>Your</span>
					<span class='header__optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingBasketIcon />
						<span class='header_optionLineTwo header__basketCount'>0</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
