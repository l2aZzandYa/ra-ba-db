import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setFilterState }) => {
    return (
        <header>
            <div className='filter-icon' onClick={() => setFilterState(true)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <span className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/schale.png`}
                    width="43" height="40"
                    alt="Blue Archive" />
            </span>
        </header>
    );
}

export default Header;