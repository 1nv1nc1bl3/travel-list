import { useState } from 'react';
import Logo from './Logo';
import Stats from './Stats';

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
    { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
    return (
        <div className='app'>
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type='text' placeholder='Item...'></input>
            <button>Add</button>
        </form>
    );
}

function PackingList() {
    return (
        <div className='list'>
            <ul>
                {initialItems.map((item) => (
                    <Item packingItem={item} key={initialItems.id} />
                ))}
            </ul>
        </div>
    );
}

function Item({ packingItem }) {
    return (
        <li>
            <span
                style={
                    packingItem.packed ? { textDecoration: 'line-through' } : {}
                }
            >
                {packingItem.quantity} {packingItem.description}
            </span>
            <button>❌</button>
        </li>
    );
}
