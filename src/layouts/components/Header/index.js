import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCirclePlay,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCirclePlay} />,
        title: 'LIVE Creator Hub',
    },

    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'Language',
                    code: 'spn',
                    title: 'Spanish',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'Language',
                    code: 'spn',
                    title: 'Spanish',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'fr',
                    title: 'France',
                },
                {
                    type: 'Language',
                    code: 'spn',
                    title: 'Spanish',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
                {
                    type: 'Language',
                    code: 'kor',
                    title: 'Korean',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },

    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

function Header() {
    const currentUser = true;

    //Handle Menu Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    {' '}
                    <img src={images.logo} alt="Tiktok" />{' '}
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>1</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg"
                                    alt="Tran
                                Thien Khiem"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
