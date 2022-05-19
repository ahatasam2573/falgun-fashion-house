import { useEffect, useState } from "react";

const useAddItemsDetail = itemsId => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `https://polar-escarpment-57934.herokuapp.com/items/${itemsId}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [itemsId]);
    return [items]
}

export default useAddItemsDetail;