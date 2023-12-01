import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://blogchiasekienthuc.com/wp-content/uploads/2022/11/anh-meme-meo-hai-huoc-de-thuong-42.jpg"
                alt="Khiem"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Thien Khiem</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tranthienkhiem</span>
            </div>
        </div>
    );
}

export default AccountItem;
