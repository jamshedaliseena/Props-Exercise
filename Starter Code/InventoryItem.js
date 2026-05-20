function InventoryItem({
    name,
    type,
    quantity = 0,
    price = 0
}) {

    const totalValue = quantity * price;

    return (
        <div style={{
            border:"1px solid gray",
            padding:"10px",
            margin:"10px"
        }}>

            <h2>{name}</h2>

            <p>
                <b>Type:</b> {type}
            </p>

            <p>
                <b>Quantity:</b> {quantity}
            </p>

            <p>
                <b>Price:</b> ${price}
            </p>

            <p>
                <b>Total Value:</b> ${totalValue}
            </p>


            {quantity < 5 &&
                <Message>
                    🚨 Warning: Low stock remaining!
                </Message>
            }


            {totalValue > 1000 &&
                <Message>
                    💎 High value item! Extra protection recommended.
                </Message>
            }

        </div>
    )
}