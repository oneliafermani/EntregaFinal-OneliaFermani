import { useState } from "react";
import './CheckoutForm.css'

    const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
        name,
        phone,
        email
        };

        onConfirm(userData);
    };

    return (
        <div className="Container">
        <form onSubmit={handleConfirm} className="Form">
            <label className="label">
            Nombre y Apellido
            <input required
                className="input"
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)
                }
            />
            </label>
            <label className="label">
            Telefono
            <input required
                className="input"
                type="text"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
            />
            </label>
            <label className="label">
            Email
            <input required
                className="input"
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            </label>
            <div className="label">
            <button type="submit" className="btnCat">
                Crear orden
            </button>
            </div>
        </form>
        </div>
    );
    };

export default CheckoutForm;
