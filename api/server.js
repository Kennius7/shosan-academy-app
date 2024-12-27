

export default function handler(req, res) {
    // const { name } = req.query;
    // const message = name ? `Hello, ${name}` : "Hello Guest";
    // res.status(200).json({ message: message });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    if (req.method === "POST") {
        const { email, password } = req.body;
        const message = email || password ? `This email, ${email} has been logged in.` : "";
        res.status(200).json({ message: message });
    }
}


