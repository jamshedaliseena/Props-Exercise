function App(){

    const inventory = [
        {
            name:"Laser Blaster",
            type:"Weapon",
            quantity:2,
            price:600
        },

        {
            name:"Oxygen Tank",
            type:"Supply",
            quantity:10,
            price:80
        },

        {
            name:"Space Suit",
            type:"Equipment",
            quantity:4,
            price:350
        },

        {
            name:"Energy Crystal",
            type:"Fuel",
            quantity:1,
            price:2000
        }
    ];


    return(
        <div>

            <h1>🌌 Spacecraft Inventory System</h1>

            {inventory.map(item => (
                <InventoryItem
                    key={item.name}
                    name={item.name}
                    type={item.type}
                    quantity={item.quantity}
                    price={item.price}
                />
            ))}

        </div>
    )
}


ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);