import React from 'react'
import Product from './Product'

const ItemSets = ({ productData, image }) => {
    return (
        <>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-[20px] w-full">

                {productData.slice(0, 8).map((items) => (
                    <Product
                        key={items.id}
                        id={items.id}
                        title={items.title}
                        price={items.price}
                        rating={items.rating}
                        image={items.image}
                        specification={items.specification}
                        detail={items.detail}
                        type={items.type}
                    />
                ))}

            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-[5rem] w-full">

                {image && <img src={image} alt="" />}

                {productData.slice(8,).map((items) => (
                    <Product
                        key={items.id}
                        id={items.id}
                        title={items.title}
                        price={items.price}
                        rating={items.rating}
                        image={items.image}
                        specification={items.specification}
                        detail={items.detail}
                        type={items.type}
                    />
                ))}

            </div>
        </>
    )
}

export default ItemSets