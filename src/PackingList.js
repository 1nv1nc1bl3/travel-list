import Item from './Item';
export default function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className='list'>
            <ul>
                {items.map((item) => (
                    <Item
                        packingItem={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    );
}
