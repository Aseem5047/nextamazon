import moment from 'moment';
import React, { useMemo, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { getUser } from '../features/authSlice';
import { selectBasketItems } from '../features/basketSlice';
import OrderedProduct from './OrderedProduct';

const Order = ({ order }) => {
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const user = useSelector(getUser);

    useMemo(() => {
        const groupedItems = order.data.basket.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            // console.log(results);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems)
    }, [order])
    console.log(order);

    return (
        <div className="border border-gray-400 rounded-lg mb-10">
            <div className="flex flex-col py-8 px-14">
                <div className="text-center flex flex-col items-center">
                    <h2 className="text-2xl font-bold">Order</h2>
                    <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
                </div>

                <div className="mt-14">

                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (

                        < OrderedProduct
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
                <div className="flex flex-col items-end justify-end">

                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <h3 className="text-xl font-semibold">Order Total ... {value}</h3>

                            </>
                        )}
                        decimalScale={2}
                        value={order.data.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹ "}
                    />
                    <p className="text-lg">
                        <small>{order.id}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Order