import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";



export default async function handler(req, res) {
    // const { name } = req.query;
    // const message = name ? `Hello, ${name}` : "Hello Guest";
    // res.status(200).json({ message: message });
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    if (req.method === "POST") {
        try {
            const { email, password } = req.body;
            const newUser = await signInWithEmailAndPassword(auth, email, password);
    
            const message = email || password 
            ? `Welcome, ${newUser?.user?.displayName.split(" ")[0]}` : "Welcome, guest";
    
            res.status(200).json({ message: message });
        } catch (error) {
            res.json({ error: `Error: ${error.message}` });
        }
    }
}


