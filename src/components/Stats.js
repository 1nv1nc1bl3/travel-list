function Stats({ numItems, numPacked, percentage }) {
    if (!numItems)
        return (
            <p className='stats'>
                <em>Start adding some items to the packing list.</em>
            </p>
        );
    else
        return (
            <footer className='stats'>
                <em>
                    {percentage === 100
                        ? 'You got everything! Ready to go'
                        : `You have ${numItems} item${numItems === 1 ? '' : 's'} on your list and you already packed
                ${numPacked} (${percentage}%)`}
                </em>
            </footer>
        );
}

export default Stats;
