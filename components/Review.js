import * as React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { selectBasketItems } from '../features/basketSlice';
import { useSelector } from 'react-redux';
import PaymentCheckoutProduct from './PaymentCheckoutProduct';
import HorizontalScroll from 'react-horizontal-scrolling'

const Review = () => {
    const [groupedItemsInBasket, setGroupedItemsInBasket] = React.useState([])
    const basket = useSelector(selectBasketItems);

    React.useMemo(() => {
        const groupedItems = basket.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            // console.log(results);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems)
    }, [basket])

    return (
        <div className="flex overflow-x-scroll overflow-y-hidden">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (

                < PaymentCheckoutProduct
                    key={key}
                    id={items[0].id}
                    title={items[0].title}
                    image={items[0].image}
                    price={items[0].price}
                    rating={items[0].rating}
                    details={items[0].detail}
                    quantity={items.length}
                />

            ))}
        </div>

    )
}

export default Review