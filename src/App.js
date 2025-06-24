import { useState } from 'react';
import Logo from './Logo';
import Stats from './Stats';
import PackingList from './PackingList';
import Form from './Form';

// const initialItems = [
//     { id: 1, description: 'Passports', quantity: 2, packed: false },
//     { id: 2, description: 'Socks', quantity: 12, packed: true },
//     { id: 3, description: 'Charger', quantity: 1, packed: false },
// ];

export default function App() {
    const [items, setItems] = useState([]);
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
            />
            <Stats
                numItems={numItems}
                numPacked={numPacked}
                percentage={percentage}
            />
        </div>
    );
}
