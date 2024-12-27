

export default function handler(req, res, next) {
    const { name } = req.query;
    const message = name ? `Hello, ${name}` : "Hello Guest";
    res.status(200).json({ message: message });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    next();

    if (req.method === "POST") {
        const { email, password } = req.body;
        const message = email || password ? `This email, ${email} has been logged in.` : "";
        res.status(200).json({ message: message });
    }
}


