import React, { useState, useEffect } from 'react';

const RankItems = () => {

    const [items, setItems] = useState([]);
    // items retrieved from server side code
    // set items for react component

    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })

    }, []);

    return (
        <main>
            (items != null)? <div>
            </div>

        </main>
        )
}