

export default function handler(req, res) {
    const { name } = req.query;
    const message = name ? `Hello, ${name}` : "Hello Guest";
    res.status(200).json({ message: message });

    if (req.method === "POST") {
        const { email, password } = req.body;
        const message = email || password ? `This email, ${email} has been logged in.` : "";
        res.status(200).json({ message: message });
    }
}


