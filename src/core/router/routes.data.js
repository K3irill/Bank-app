import { Home } from '@/components/screens/home/home.component'
import { Auth } from '@/components/screens/auth/auth.component'
import { AboutUs } from '@/components/screens/about-us/about-us.component'

export const ROUTS = [
	{
		Path: '/',
		component: Home
	},
	{
		Path: '/auth',
		component: Auth
	},
	{
		Path: '/about-us',
		component: AboutUs
	}
]
