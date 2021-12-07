import React from 'react'
import { Bakery } from '../../components/ActivityOne/Bakery/Bakery'
import { ActivityThree } from '../../components/ActivityThree/ActivityThree';
import { ActivityTwo } from '../../components/ActivityTwo/ActivityTwo';
import styles from './Home.module.css'

export const Home = () => {
	return (
		<div className={styles.home}>
			<Bakery />
			<hr />
			<ActivityTwo />
			<ActivityThree />
		</div>
	)
}