/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, {Fragment, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {logout} from '../../redux/auth/auth.actions';
import {BsFillInboxFill}  from 'react-icons/bs'
import {ReactComponent as Search} from '../../assets/Search.svg';
import {ReactComponent as Logo} from '../../assets/LogoMd.svg';
import {ReactComponent as SmallLogo} from '../../assets/LogoGlyphMd.svg';
// import Spinner from '../spinner/Spinner';
import LinkButton from '../link-button/LinkButton';
import MobileSideBar from '../mobile-sidebar/MobileSideBar';

import './Header.styles.css';

// {auth: {isAuthenticated, loading, user}, logout}
const Header = () => {
  let history = useNavigate();
  const [searchState, setSearchState] = useState(false);

  const user = {
    username: 'John Doe',
    gravatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  }

  const logout = () => { };


  const authLinks = (
    <div className='btns'>
      {/* {loading || user === null ? (
        <Spinner width='50px' height='50px' />
      ) : ( */}
    
      {/* ) */}
      {/* } */}
      <Link to='/userprofile'>
        
      </Link>
      <Link to={'/'} title={"Messages"} style={{paddingRight: "20px", color: "#fff"}}>
        <BsFillInboxFill style={{fontSize: "20px", }} />
      </Link>
      <Link to={`/users/${user.id}`} title={user.username} style={{ paddingRight: "10px"}}>
          <img
            alt='user-logo'
            className='logo'
            src={user.gravatar}
          />
        </Link>
      {'  '}
      <LinkButton
        text={'Log out'}
        link={'/login'}
        type={'s-btn__filled'}
        handleClick={logout}
      />
    </div>
  );

  const authTabs = (
    <div className='s-navigation'>
      <Link to='/' className='s-navigation--item is-selected'>
        Products
      </Link>
    </div>
  );

  // const guestTabs = (
  //   <div className='s-navigation'>
  //     <Link to='/' className='s-navigation--item is-selected'>
  //       Products
  //     </Link>
  //     <Link to='/' className='s-navigation--item not-selected'>
  //       Customers
  //     </Link>
  //     <Link to='/' className='s-navigation--item not-selected'>
  //       Use cases
  //     </Link>
  //   </div>
  // );

  // const guestLinks = (
  //   <div className='btns'>
  //     <LinkButton text={'Log in'} link={'/login'} type={'s-btn__primary'} />
  //     <LinkButton text={'Sign up'} link={'/register'} type={'s-btn__filled'} />
  //   </div>
  // );

  const SearchBar = () => {
    return (
      <form
        onSubmit={() => history.push('/questions')}
        className='small-search-form'
        autoComplete='off'
      >
          <input
            className='small-search'
            autoComplete='off'
            type='text'
            name='search'
            placeholder='Search...'
          />
          <Search className="small-search-icon" />
      </form>
    );
  }

// loading ? ('') :
// <Fragment>{isAuthenticated ? authTabs : guestTabs}</Fragment>
// <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>    
  return  (
    <Fragment>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bs-md'>
        <div className="hamburger">
          <MobileSideBar hasOverlay />
        </div>
        <div className='header-brand-div'>
          <Link className='navbar-brand' to='/'>
            <Logo className='full-logo' />
            <SmallLogo className='glyph-logo' />
          </Link>
          {/* {!loading && ( */}
            <Fragment>{ authTabs}</Fragment>
          {/* )} */}
        </div>
        <div className="header-search-div">
          <form
            id='search'
            onSubmit={() => history.push('/questions')}
            className={`grid--cell fl-grow1 searchbar px12 js-searchbar`}
            autoComplete='off'
          >
            <div className='ps-relative search-frame'>
              <input
                className='s-input s-input__search h100 search-box'
                style={{width: "500px"}}
                autoComplete='off'
                type='text'
                name='search'
                placeholder='Search...'
              />
              <Search />
            </div>
          </form>
          
          <Search className="search-icon" onClick={() => setSearchState(!searchState)} />
                      {/* {!loading && ( */}
                          <Fragment>{ authLinks}</Fragment>
                        {/* )} */}
        </div>
      </nav>
      {searchState && <SearchBar />}
    </Fragment>
  );
};

// Header.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default Header;