import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(removeItem(pizzaId));
    }

    return (
        <Button type="small" onClick={handleDelete}>
            Delete
        </Button>
    );
}
