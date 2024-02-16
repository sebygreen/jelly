import Button from "@/components/Button";
import styles from "@/style/Contact.module.css";

export default function Contact() {
    async function handleSubmit() {
        "use server";
        console.log("form submitted");
        return false;
    }

    return (
        <form action={handleSubmit} className={styles.container}>
            <div className={styles.meta}>
                <div>
                    <label htmlFor="package">Package</label>
                    <select name="package" id="package">
                        <option value="static">Site Vitrine</option>
                        <option value="identity">Identité Visuelle</option>
                        <option value="eshop">Boutique Premium</option>
                        <option value="communication">
                            Pack Communication
                        </option>
                        <option value="full">Complet</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label htmlFor="name">Surname</label>
                    <input
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Appleseed"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.appleseed@email.com"
                    />
                </div>
            </div>
            <div className={styles.message}>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Type here..."
                ></textarea>
                <Button type="submit" text="Submit" />
            </div>
        </form>
    );
}
