import { useState } from "react"
import PropTypes from 'prop-types';
import toast from "react-hot-toast";
import s from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {

    const [value, setValue] = useState('');

    const handlSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            toast.error('Please enter a query!');
            return;
        }
        onSubmit(value.trim());
        setValue('');
    }

    return (


        <header className={s.header}>
            <form onSubmit={handlSubmit}>
                <input className={s.formInput} onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images..."
                />
                <button className={s.btnS} type="submit">Search</button>
            </form>
        </header>


    )

}
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar