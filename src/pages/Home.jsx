
import { Categories, SortPopup, PizzaBlock } from '../components/';
import { setCategory, setSortBy } from '../redux/actions/filters'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import MyLoader from '../components/Loader';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: 'популярности', type: 'popular', order: 'desc' },
{ name: 'цене', type: 'price', order: 'desc' },
{ name: 'афлфавиту', type: 'name', order: 'asc' }]


function Home() {

	const dispatch = useDispatch()
	const items = useSelector((state) => state.pizzas.items)
	const cartItems = useSelector((state) => state.cart.items)
	const isLoaded = useSelector((state) => state.pizzas.isLoaded)
	const { category, sortBy } = useSelector(({ filters }) => filters)

	const onSelectCategory = React.useCallback(index => {
		dispatch(setCategory(index))
	}, [])

	const onSelectSortType = React.useCallback(type => {
		dispatch(setSortBy(type))
	}, [])

	const onAddPizzaToCart = (obj) => {
		dispatch(addPizzaToCart(obj))
	}

	React.useEffect(() => {
		dispatch(fetchPizzas(sortBy, category))
	}, [category, sortBy])


	return (
		<div className="container">
			<div className="content__top">
				<Categories onClickCategory={onSelectCategory} activeCategory={category}
					items={categoryNames} />

				<SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortType}
					items={sortItems} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">

				{isLoaded
					? items.map(obj =>
						<PizzaBlock key={obj.id} {...obj} onAddPizza={onAddPizzaToCart} addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} />)

					: Array(12).fill(0).map((_, index) => <MyLoader key={index} />)
				}

			</div>
		</div>

	)
}



export default Home








