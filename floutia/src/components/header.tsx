import variables from '../../app/styles/variables.module.scss';
import styles from '../styles/page.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { loginDataState } from '../recoil/atoms';
import { notifications } from '@mantine/notifications';

export default function Header() {
  const router = useRouter();
  const [loginData, setLoginData] = useRecoilState(loginDataState);

  const handleLogout = () => {
    axios.post('/api/logout').then(() => {
      setLoginData(null);
      notifications.show({
        title: '로그아웃 되었습니다.',
        message: '다음에 또 봐요!',
      });
    });
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/floutia_logo.png"
            alt="Floutia Logo"
            width={100}
            height={130}
            className={styles.logo}
          />
        </div>
        <div className={styles.headerColor}> 채림 님을 위한 곡 추천</div>
        <button
          className={styles.login_btn}
          onClick={() => router.push('/api/login')}
        >
          Log In
        </button>
      </header>
    </div>
  );
}
