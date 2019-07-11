import {React, Component} from 'react';
import settingsIcon from '../../assets/adjust.svg';
import atSymbol from '../../assets/at-symbol.svg';
import avatar from '../../assets/avatar.svg';
import editPencil from '../../assets/edit.svg';
import ellipsisDots from '../../assets/ellipsis.svg';
import updatesGiftIcon from '../../assets/gift.svg';
import info from '../../assets/info.svg';
import lock from '../../assets/padlock.svg';
import phone from '../../assets/phone-call.svg';
import pin from '../../assets/push-pin.svg';
import search from '../../assets/search.svg';
import star from '../../assets/star.svg';
import './Header.css';

class Header extends Component {

    render() {
      return (
        <div className="header">
  
            <div id='group-name'>
                <img src={lock} />
                <p>GROUP NAME</p>
            </div>
            <div id='message-stats'>
                <img src={star} />
                <div id='member-count'>
                    <img src={avatar} />
                    <p>0</p>
                </div>
                <div id='pinned-count'>
                    <img src={pin} />
                    <p>0</p>
                </div>
                <div id='add-topic'>
                    <img src={editPencil} />
                    <p>Add a topic</p>
                </div>
            </div>
            <div id='navigation-information'>
                <img src={phone} />
                <img src={info} />
                <img src={settingsIcon} />
                <div id='search'>
                    <img src={search} />
                    <p>Search</p>
                </div>
                <img src={atSymbol} />
                <img src={star} />
                <img src={ellipsisDots} />
                <div id='updates'>
                    <img src={updatesGiftIcon} />
                    <p>0</p>
                    <p id='update-p' className='toggle-visibility'>Updates</p>
                </div>
            </div>

  
        </div>
      );
    }
  }
  
  
  export default Header;