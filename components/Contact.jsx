import Button from "@/components/Button";
import styles from "@/style/Contact.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    async function handleSubmit() {
        "use server";
        console.log("form submitted");
        return false;
    }

    return (
        <form action={handleSubmit} className={styles.container}>
            <div className={styles.meta}>
                <div className={styles.input}>
                    <label htmlFor="package">Package</label>
                    <div className={styles.select}>
                        <ChevronUpDownIcon />
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
                </div>
                <div className={styles.input}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John"
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="name">Surname</label>
                    <input
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Appleseed"
                    />
                </div>
                <div className={styles.input}>
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
                <Button type="submit" text="Submit" icon={<ArrowRightIcon />} />
            </div>
        </form>
    );
}
