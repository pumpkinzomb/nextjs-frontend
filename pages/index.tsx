import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Link href="/test">
                <h2>Go test page.</h2>
            </Link>
        </div>
    );
}
